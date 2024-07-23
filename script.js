const { memo, useRef, useEffect } = React;

// Awesome lottie animation by Mikhail Voloshin 
// https://lottiefiles.com/32147-cute-cat-works
const LOTTIE_PATH = 'https://assets.codepen.io/3685267/cute-cat-works.json';
const Lottie = memo(({ className, path }) => {
  const elm = useRef();
  const animation = useRef();

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      path,
      container: elm.current,
      renderer: 'svg',
      loop: true,
      autoplay: true });

  }, []);

  return /*#__PURE__*/React.createElement("div", { className: className, ref: elm });
});

const App = () => /*#__PURE__*/React.createElement(Lottie, { className: "h-screen container mx-auto", path: LOTTIE_PATH });

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));