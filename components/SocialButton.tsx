import Icon from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({title, name, backgroundColor}) => {
  return (
    <Icon.Button
      name={name}
      backgroundColor={backgroundColor}
    >
      {title}
    </Icon.Button>
)};

export default SocialButton;


