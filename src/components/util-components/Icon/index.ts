import React, { Component } from 'react';

interface IProps {
  type: string;
  className?: string;
}

const Icon: React.FC<IProps> = ({ type, className }) => {
  return React.createElement(type, { className });
};

export default Icon;
