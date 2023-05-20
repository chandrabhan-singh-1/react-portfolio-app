import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>

      <section>
        <TestimonialCard
          name={"Chandrabhan"}
          feedback={"Your Teaching skills are so good."}
        />
        <TestimonialCard
          name={"Nishant Soni"}
          feedback={"How was your CA final Exams, Bro?"}
        />
        <TestimonialCard
          name={"Poras Sen"}
          feedback={"Good luck for the UPSC Prelims, Bro."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonials;
