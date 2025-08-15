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
  Alert,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UserOutlined,
  LockOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import {
  addGuestbook,
  getGuestbooks,
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
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 방명록 로드
  useEffect(() => {
    if (!isClient) return;

    const loadGuestbooks = async () => {
      try {
        setLoading(true);
        setApiError(false);
        
        const result = await getGuestbooks();
          
        setGuestbooks(result.data || []);
      } catch (error) {
        console.error('방명록 로드 실패:', error);
        setApiError(true);
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

      const result = await addGuestbook({
        name: values.name,
        message: values.message,
        relationship: values.relationship || '',
      });

      if (result.success) {
        // 새 방명록을 목록에 추가
        const newGuestbook = {
          id: result.id,
          name: values.name,
          message: values.message,
          relationship: values.relationship || '',
          timestamp: new Date().toISOString(),
        };
        
        setGuestbooks([newGuestbook, ...guestbooks]);
        form.resetFields();
        setIsModalVisible(false);
        message.success('방명록이 등록되었습니다.');
      }
    } catch (error) {
      console.error('방명록 추가 실패:', error);
      message.error(error.message || '방명록 등록에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  // 날짜 포맷팅
  const formatDate = timestamp => {
    try {
      if (!timestamp) {
        return '날짜 없음';
      }

      const date = new Date(timestamp);

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

  return (
    <Wrapper style={{ marginBottom: 16 }}>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>방명록</Title>
      </Divider>

      {/* API 오류 알림 */}
      {apiError && (
        <Alert
          message="방명록 서비스 연결 오류"
          description="서버와의 연결에 문제가 있어 방명록 기능을 사용할 수 없습니다. 잠시 후 다시 시도해주세요."
          type="warning"
          showIcon
          icon={<ExclamationCircleOutlined />}
          style={{ marginBottom: 16 }}
        />
      )}

      <AddButton
        icon={<PlusOutlined />}
        size="large"
        onClick={() => setIsModalVisible(true)}
        disabled={apiError}
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
        ) : apiError ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#999',
              fontSize: '0.9rem',
            }}
          >
            방명록 서비스를 사용할 수 없습니다.
            <br />
            잠시 후 다시 시도해주세요.
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
                  style={{ cursor: 'default' }}
                >
                  <TimeStamp>{formatDate(guestbook.timestamp)}</TimeStamp>

                  <GuestName>{guestbook.name}</GuestName>
                  
                  {guestbook.relationship && (
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: '#666', 
                      marginBottom: '8px' 
                    }}>
                      {guestbook.relationship}
                    </div>
                  )}

                  <GuestMessage>{guestbook.message}</GuestMessage>
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
            name="relationship"
            label="관계 (선택사항)"
          >
            <Input
              placeholder="예: 신랑 친구, 신부 동생 등"
              maxLength={30}
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
    </Wrapper>
  );
};

export default Guestbook;
