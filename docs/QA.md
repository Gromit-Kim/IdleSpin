## Question & Answer
현재 프로젝트를 하면서 궁금했던 것을 정리한다.

### Routing과 Navigating의 차이는?
- Routing
    - 웹 애플리케이션에서 URL을 기반으로 특정 페이지(컴포넌트)를 결정하는 과정
    - 사용자가 특정 URL을 입력하거나 특정 링크를 클릭했을 때 어떤 화면을 보여줄지 정의하는 역할
- Navigating
    - 사용자가 한 페이지에서 다른 페이지로 이동하는 동작
    - 네비게이션은 라우팅을 활용해 새로운 페이지를 렌더링하거나 상태를 변경하는 방식으로 구현된다.

즉, Routing은 '길을 만드는 것'이다. `<Route path="/home"/>`처럼 특정 URL과 컴포넌트를 연결하는 설정을 한다. Navigating은 '길을 따라 이동하는 것'이다. `<Link to="/home">Home</Link>`이나 `useNavigatie("/home")` 같은 코드가 사용자를 특정 경로로 이동시키는 과정이다.
