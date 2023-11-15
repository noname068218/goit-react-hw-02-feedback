import { SectionStyle } from './Feedback.style';

export const Section = ({ title, children }) => (
  <div>
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  </div>
);
