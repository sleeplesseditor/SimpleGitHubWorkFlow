import './HelpBox.css';

interface IProps {
  text: string;
  title: string;
}

function HelpBox({ title, text }: IProps) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
