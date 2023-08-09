import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
const [token, setToken] = useState(null);
export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

