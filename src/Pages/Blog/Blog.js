import React from "react";

const Blog = () => {
  return (
    <div className="m-3 text-black">
      <h3 className="text-center my-4 ">Blog Pages</h3>

      <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Q:What is Difference between SQL and NoSQL?
        </h3>
        <p className="text-lg font-medium">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL
        </p>
      </div>

      <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Q: What is JWT, and how does it work?
        </h3>
        <p className="text-lg font-medium">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
      </div>

      <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Q: What is the difference between javascript and NodeJS?
        </h3>
        <p className="text-lg font-medium">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>

      <div className="border-l-4 border-sky-800 mx-20 my-10 p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Q: How does NodeJS handle multiple requests at the same time?
        </h3>
        <p className="text-lg font-medium">
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded.
        </p>
      </div>
    </div>
  );
};

export default Blog;
