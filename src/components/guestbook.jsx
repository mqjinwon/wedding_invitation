import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Modal,
  message,
  Card,
  Divider,
  Form,
  Typography,
  Spin,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UserOutlined,
  LockOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import {
  addGuestbook,
  getGuestbooks,
  updateGuestbook,
  deleteGuestbook,
  migrateFromLocalStorage,
} from '../services/guestbookService';

const { TextArea } = Input;
const { Text } = Typography;

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const AddButton = styled(Button)`
  background: var(--white);
  border-color: var(--white);
  color: var(--black);
  width: 100%;
  max-width: 400px;
  height: 48px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 0 auto 24px;

  &:hover {
    background-color: var(--light-green) !important;
    border-color: var(--light-green) !important;
    color: var(--black) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: var(--medium-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--black) !important;
  }

  @media screen and (max-width: 768px) {
    height: 52px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    height: 56px;
    font-size: 0.85rem;
  }
`;

const GuestbookCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  &.expanded {
    transform: scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  .ant-card-body {
    padding: 16px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;

    .ant-card-body {
      padding: 12px;
    }
  }
`;

const TimeStamp = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 0.75rem;
  color: #999;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    top: 8px;
    left: 12px;
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  bottom: 12px;
  right: 16px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GuestbookCard}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    bottom: 8px;
    right: 12px;
    gap: 6px;
  }
`;

const ActionButton = styled(Button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-color: var(--light-green);
  color: var(--dark-green);
  transition: all 0.3s ease;

  &:hover {
    background: var(--light-green) !important;
    border-color: var(--medium-green) !important;
    color: var(--dark-green) !important;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const GuestName = styled.div`
  font-weight: bold;
  color: var(--dark-green);
  margin-bottom: 8px;
  margin-top: 24px;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
    margin-top: 20px;
  }
`;

const GuestMessage = styled.div`
  color: var(--text-color);
  line-height: 1.6;
  margin-top: 8px;
  white-space: pre-wrap;
  word-break: break-word;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Guestbook = () => {
  const [isClient, setIsClient] = useState(false);
  const [guestbooks, setGuestbooks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [editingGuestbook, setEditingGuestbook] = useState(null);
  const [deletingGuestbook, setDeletingGuestbook] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [deleteForm] = Form.useForm();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Firebase에서 방명록 데이터 로드
  useEffect(() => {
    if (!isClient) return;

    const loadGuestbooks = async () => {
      try {
        setLoading(true);
        // 기존 로컬 스토리지 데이터 마이그레이션
        await migrateFromLocalStorage();
        // Firebase에서 데이터 로드
        const data = await getGuestbooks();
        setGuestbooks(data);
      } catch (error) {
        console.error('방명록 로드 실패:', error);
        message.error('방명록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadGuestbooks();
  }, [isClient]);

  // 방명록 추가
  const handleAddGuestbook = async () => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();

      const newGuestbook = await addGuestbook({
        name: values.name,
        password: values.password,
        message: values.message,
      });

      setGuestbooks([newGuestbook, ...guestbooks]);
      form.resetFields();
      setIsModalVisible(false);
      message.success('방명록이 등록되었습니다.');
    } catch (error) {
      console.error('방명록 추가 실패:', error);
      message.error('방명록 등록에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  // 방명록 수정
  const handleEditGuestbook = async () => {
    try {
      setSubmitting(true);
      const values = await editForm.validateFields();

      // 슈퍼 권한 확인
      if (values.password === 'remove12345678') {
        await updateGuestbook(editingGuestbook.id, values.message);
        const updatedGuestbooks = guestbooks.map(gb =>
          gb.id === editingGuestbook.id
            ? { ...gb, message: values.message }
            : gb
        );
        setGuestbooks(updatedGuestbooks);
        editForm.resetFields();
        setIsEditModalVisible(false);
        setEditingGuestbook(null);
        message.success('방명록이 수정되었습니다.');
        return;
      }

      // 일반 권한 확인
      if (values.password === editingGuestbook.password) {
        await updateGuestbook(editingGuestbook.id, values.message);
        const updatedGuestbooks = guestbooks.map(gb =>
          gb.id === editingGuestbook.id
            ? { ...gb, message: values.message }
            : gb
        );
        setGuestbooks(updatedGuestbooks);
        editForm.resetFields();
        setIsEditModalVisible(false);
        setEditingGuestbook(null);
        message.success('방명록이 수정되었습니다.');
      } else {
        message.error('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('방명록 수정 실패:', error);
      message.error('방명록 수정에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  // 방명록 삭제 모달 열기
  const showDeleteModal = guestbook => {
    setDeletingGuestbook(guestbook);
    deleteForm.resetFields();
    setIsDeleteModalVisible(true);
  };

  // 방명록 삭제 실행
  const handleDeleteGuestbook = async () => {
    try {
      setSubmitting(true);
      const values = await deleteForm.validateFields();

      // 슈퍼 권한 확인
      if (values.password === 'remove12345678') {
        await deleteGuestbook(deletingGuestbook.id);
        const updatedGuestbooks = guestbooks.filter(
          gb => gb.id !== deletingGuestbook.id
        );
        setGuestbooks(updatedGuestbooks);
        setIsDeleteModalVisible(false);
        setDeletingGuestbook(null);
        deleteForm.resetFields();
        message.success('방명록이 삭제되었습니다.');
        return;
      }

      // 일반 권한 확인
      if (values.password === deletingGuestbook.password) {
        await deleteGuestbook(deletingGuestbook.id);
        const updatedGuestbooks = guestbooks.filter(
          gb => gb.id !== deletingGuestbook.id
        );
        setGuestbooks(updatedGuestbooks);
        setIsDeleteModalVisible(false);
        setDeletingGuestbook(null);
        deleteForm.resetFields();
        message.success('방명록이 삭제되었습니다.');
      } else {
        message.error('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('방명록 삭제 실패:', error);
      message.error('방명록 삭제에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  // 수정 모달 열기
  const showEditModal = guestbook => {
    setEditingGuestbook(guestbook);
    editForm.setFieldsValue({
      password: '',
      message: guestbook.message,
    });
    setIsEditModalVisible(true);
  };

  // 날짜 포맷팅
  const formatDate = timestamp => {
    try {
      // timestamp가 유효한지 확인
      if (!timestamp) {
        return '날짜 없음';
      }

      const date = new Date(timestamp);

      // 유효하지 않은 날짜인 경우
      if (isNaN(date.getTime())) {
        return '날짜 오류';
      }

      return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('날짜 포맷팅 오류:', error);
      return '날짜 오류';
    }
  };

  // 카드 클릭 시 확대/축소
  const handleCardClick = guestbookId => {
    setExpandedCard(expandedCard === guestbookId ? null : guestbookId);
  };

  return (
    <Wrapper style={{ marginBottom: 16 }}>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>방명록</Title>
      </Divider>

      <AddButton
        icon={<PlusOutlined />}
        size="large"
        onClick={() => setIsModalVisible(true)}
      >
        방명록 작성하기
      </AddButton>

      {/* 방명록 목록 */}
      <div style={{ textAlign: 'left' }}>
        {!isClient ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
            }}
          >
            <Spin size="large" />
            <div style={{ marginTop: '16px', color: '#666' }}>로딩 중...</div>
          </div>
        ) : loading ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
            }}
          >
            <Spin size="large" />
            <div style={{ marginTop: '16px', color: '#666' }}>
              방명록을 불러오는 중...
            </div>
          </div>
        ) : (
          <>
            {guestbooks.length > 0 && (
              <div
                style={{
                  marginBottom: '16px',
                  padding: '0 4px',
                }}
              >
                <Text style={{ color: '#666', fontSize: '0.9rem' }}>
                  총 {guestbooks.length}개의 방명록
                </Text>
              </div>
            )}
            {guestbooks.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: '#999',
                  fontSize: '0.9rem',
                }}
              >
                아직 방명록이 없습니다.
                <br />첫 번째 방명록을 남겨보세요!
              </div>
            ) : (
              guestbooks.map(guestbook => (
                <GuestbookCard
                  key={guestbook.id}
                  className={expandedCard === guestbook.id ? 'expanded' : ''}
                  onClick={() => handleCardClick(guestbook.id)}
                >
                  <TimeStamp>{formatDate(guestbook.timestamp)}</TimeStamp>

                  <GuestName>{guestbook.name}</GuestName>

                  <GuestMessage>{guestbook.message}</GuestMessage>

                  <ActionButtons>
                    <ActionButton
                      icon={<EditOutlined />}
                      onClick={e => {
                        e.stopPropagation();
                        showEditModal(guestbook);
                      }}
                    />
                    <ActionButton
                      icon={<DeleteOutlined />}
                      onClick={e => {
                        e.stopPropagation();
                        showDeleteModal(guestbook);
                      }}
                    />
                  </ActionButtons>
                </GuestbookCard>
              ))
            )}
          </>
        )}
      </div>

      {/* 방명록 추가 모달 */}
      <Modal
        title="방명록 작성"
        open={isModalVisible}
        onOk={handleAddGuestbook}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        okText="등록"
        cancelText="취소"
        width={400}
        confirmLoading={submitting}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="이름"
            rules={[{ required: true, message: '이름을 입력해주세요.' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="이름을 입력하세요"
              maxLength={20}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="비밀번호"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호를 입력하세요"
              maxLength={20}
            />
          </Form.Item>

          <Form.Item
            name="message"
            label="메시지"
            rules={[{ required: true, message: '메시지를 입력해주세요.' }]}
          >
            <TextArea
              prefix={<MessageOutlined />}
              placeholder="축하 메시지를 남겨주세요"
              rows={4}
              maxLength={500}
              showCount
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* 방명록 수정 모달 */}
      <Modal
        title="방명록 수정"
        open={isEditModalVisible}
        onOk={handleEditGuestbook}
        onCancel={() => {
          setIsEditModalVisible(false);
          setEditingGuestbook(null);
          editForm.resetFields();
        }}
        okText="수정"
        cancelText="취소"
        width={400}
        confirmLoading={submitting}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호를 입력하세요"
              maxLength={20}
            />
          </Form.Item>

          <Form.Item
            name="message"
            label="메시지"
            rules={[{ required: true, message: '메시지를 입력해주세요.' }]}
          >
            <TextArea
              prefix={<MessageOutlined />}
              placeholder="수정할 메시지를 입력하세요"
              rows={4}
              maxLength={500}
              showCount
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* 방명록 삭제 모달 */}
      <Modal
        title="방명록 삭제"
        open={isDeleteModalVisible}
        onOk={handleDeleteGuestbook}
        onCancel={() => {
          setIsDeleteModalVisible(false);
          setDeletingGuestbook(null);
          deleteForm.resetFields();
        }}
        okText="삭제"
        cancelText="취소"
        width={400}
        confirmLoading={submitting}
      >
        <div style={{ marginBottom: '16px' }}>
          <p style={{ marginBottom: '12px', color: '#666' }}>
            <strong>{deletingGuestbook?.name}</strong>님의 방명록을 삭제하려면
            비밀번호를 입력하세요.
          </p>
        </div>
        <Form form={deleteForm} layout="vertical">
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="비밀번호를 입력하세요"
              maxLength={20}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default Guestbook;
