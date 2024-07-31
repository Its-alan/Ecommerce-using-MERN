
import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Privacy-policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We value your privacy and are committed to protecting your personal information.
             Our e-commerce app collects essential data to process orders, provide customer support,
              and enhance your shopping experience. We do not share your information with third
               parties without your consent, except as required by law. All transactions are secured
                using industry-standard encryption. By using our app, you agree to our collection
                 and use of information in accordance with this policy. For any questions, please 
                 contact our support team.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
