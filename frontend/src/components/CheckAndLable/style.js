// style.js
import styled from "styled-components";

// Hide the native checkbox
export const HiddenCheckBox = styled.input`
  display: none;

  &:checked + label::before {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

`;

export const StyledLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    right: -25px;
    top: 2px;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.2s ease;
  }

`;

export const CheckAndLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export const CheckAndLabelContainer = styled.div`
  width: 100%;

  &.active {
    background-color: #eef6ff;
    color: var(--color-primary);
  }
`;
