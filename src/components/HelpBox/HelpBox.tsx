import './HelpBox.css';

interface IProps {
  text: string;
  title: string;
}

function HelpBox({ title, text }: IProps) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
