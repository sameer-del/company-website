"use client";

const Cards = () => {
  const Data = [
    {
      title: "Single Sign-On (SSO)",
      description:
        "Enable users to log in once and gain access to multiple applications without reauthentication. Simplify user experience while maintaining security.",
      number: "01",
    },
    {
      title: "Identity Federation",
      description:
        "Support for identity federation using protocols like SAML, OpenID Connect, and OAuth 2.0. Seamlessly integrate with external identity providers such as Google, Microsoft, and LDAP directories.",
      number: "02",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description:
        "Define and manage user roles with fine-grained access policies. Assign permissions at the user, group, or resource level for better control.",
      number: "03",
    },
    {
      title: "Multifactor Authentication (MFA)",
      description:
        "Enhance security with additional authentication methods like OTP, email, or biometric verification. Configurable MFA policies based on user roles or resource sensitivity.",
      number: "04",
    },
    {
      title: "Customizable Authentication Flows",
      description:
        "Create and modify authentication flows to meet unique business requirements. Support for social logins, passwordless authentication, and step-up authentication.",
      number: "05",
    },
    {
      title: "User Management and Self-Service",
      description:
        "Centralized user management with options for user registration, profile updates, and account recovery. Self-service portals for users to reset passwords or manage personal data.",
      number: "06",
    },
    {
      title: "API Security and Token Management",
      description:
        "Secure APIs with token-based authentication using OAuth 2.0 and OpenID Connect. Manage access tokens, refresh tokens, and expiration policies.",
      number: "07",
    },
    {
      title: "Integration with Modern Applications",
      description:
        "Easily integrate with microservices, legacy systems, and modern web and mobile applications. SDKs and APIs available for seamless implementation across platforms.",
      number: "08",
    },
    {
      title: "Auditing and Monitoring",
      description:
        "Full audit logs of authentication and authorization events for compliance and troubleshooting. Real-time monitoring and alerts for suspicious activity.",
      number: "09",
    },
    {
      title: "Deployment Flexibility",
      description:
        "Available as an on-premises solution or a SaaS-based model. Support for containerized deployment using Docker and Kubernetes.",
      number: "10",
    },
  ];

  return (
    <section className="px-5 py-[100px] lg:px-[100px] bg-[#f8f9fa]" id="more">
      <div className="">
        <h1 className="lg:text-[45px] text-[35px] font-raleway font-[600] capitalize">
          Key Features of Our external api connecter
        </h1>
        <p className="lg:text-[18px] font-raleway mt-2">
          key features and important points of our Product
        </p>
      </div>
      <section className="mt-5 ">
        <div className="grid lg:grid-cols-3 place-items-center gap-[24px]">
          {Data.map((card, index) => (
            <div key={index} className="lg:w-[465px] px-[24px] py-[10px]">
              <div className="h-[100px] font-para text-[85px] font-[900] text-[#c1f4e1]">
                {card.number}
              </div>
              <h1 className="h-[100px] font-raleway lg:text-[28px] text-[24px] font-[700] max-w-[75%] mt-5 ">
                {card.title}
              </h1>
              <p className="font-para">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
