// eslint-disable-next-line no-undef
Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: "home",
        label: "Home",
        icon: "home",
        viewUrl: "/app.html#/home",
        children: [
          {
            pathSegment: "products",
            label: "Products",
            icon: "list",
            viewUrl: "/app.html#/products",
          },
          {
            pathSegment: "service",
            label: "Customer service",
            icon: "phone",
            viewUrl: "/app.html#/service",
          },
        ],
      },
      {
        pathSegment: "auth",
        label: "Authentication",
        icon: "Authentication",
        viewUrl: "/app.html#/login",
        children: [
          {
            pathSegment: "login",
            label: "Login",
            icon: "list",
            viewUrl: "/app.html#/login",
          },
          {
            pathSegment: "registration",
            label: "Registration",
            icon: "phone",
            viewUrl: "/app.html#/registration",
          },
        ],
      },
    ],
  },
  settings: {
    header: {
      title: "Infobench IIOT",
      logo: "/logo.png",
    },
    responsiveNavigation: "simpleMobileOnly",
  },
});
