type TagProps = {
  title: string;
  colors: {
    bgColor: string;
    textColor: string;
  }
  size: 'small' | 'large';
}

const Tag = ({title, colors, size}: TagProps) => {
  return (
    <div></div>
  )
}

export default Tag