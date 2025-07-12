import styled, { keyframes } from "styled-components";

// Styled Components
const CourseCardContainer = styled.div`
  position: relative;
  min-width: 30%;
  overflow: hidden;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 20px 0;
    &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ActionIcons = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  display: flex;
  gap: 8px;
`;


// Keyframes
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;



const ActionBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  &.active {
    background: #dbeafe;
    color: #2563eb;
  }

  &.wishlist-active {
    background: #fecaca;
    color: #dc2626;
  }

  
  &.loading {
    animation: ${pulse} 1.5s infinite;
  }
`;

const ActionIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CourseCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CourseCardContainer}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CourseHeader = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CourseTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
  margin: 0;
  transition: color 0.2s ease;

  ${CourseHeader}:hover & {
    color: #2563eb;
  }
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #6b7280;
`;

const MetaIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const TeacherInfo = styled.div`
  display: flex;
  align-items: center;
  background: #f9fafb;
  border-radius: 12px;
`;

const TeacherAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarPlaceholder = styled.svg`
  width: 20px;
  height: 20px;
  color: #6b7280;
`;

const TeacherDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0 5px;
`;

const TeacherLabel = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 0 0 2px 0;
`;

const TeacherName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CourseDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const StarIcon = styled.svg`
  width: 16px;
  height: 16px;

  &.star-filled {
    color: #fbbf24;
    fill: currentColor;
  }

  &.star-half {
    color: #fbbf24;
  }

  &.star-empty {
    color: #d1d5db;
  }
`;

const RatingText = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

const FreeBadge = styled.span`
  background: #dcfce7;
  color: #166534;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OldPrice = styled.span`
  font-size: 14px;
  color: #9ca3af;
  text-decoration: line-through;
`;

const CurrentPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #2563eb;
`;



export {
  CourseCardContainer,
  ActionIcons,
  ActionBtn,
  ActionIcon,
  ImageContainer,
  CourseImage,
  ImageOverlay,
  CardContent,
  CourseHeader,
  CourseInfo,
  CourseTitle,
  CourseMeta,
  MetaItem,
  MetaIcon,
  TeacherInfo,
  TeacherAvatar,
  AvatarImage,
  AvatarPlaceholder,
  TeacherDetails,
  TeacherLabel,
  TeacherName,
  CourseDescription,
  CardFooter,
  RatingContainer,
  StarsContainer,
  StarIcon,
  RatingText,
  PriceContainer,
  FreeBadge,
  PriceInfo,
  OldPrice,
  CurrentPrice,
};
