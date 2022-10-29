import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>Review from </h5>
      <h2>Students</h2>

      <div className="container  services__container">
        <article className="service">
          <div className="service__head">
            <h3>Our core values</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We’ve got an ambitious mission, but together we can achieve it.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Every child deserves the chance to learn regardless of where
                they are or their circumstances.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We are committed to making learning a joyful process. This
                informs what we build for our users and the culture we co-create
                with our teammates, partners and donors.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our success is defined by the success of our learners and
                educators.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We are responsible for the impact we have on the world and to
                each other. We ensure our team and company stay healthy and
                financially sustainable.
              </p>
            </li>
          </ul>
        </article>
        {/*end of ui/ux*/}
        <article className="service">
          <div className="service__head">
            <h3>Our core values</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Over 1 lakh + lives have been impacted by Jalaj Academy, and
                they continue to inspire us every day.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We understand that achieving our audacious mission is a
                marathon, so we set realistic timelines and we focus on delivery
                that also links to the bigger picture.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We deeply understand and empathize with our users. We leverage
                user insights, research, and experience to build content,
                products, services, and experiences that our users trust and
                love. Our success is defined by the success of our learners and
                educators.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We insist on high standards and deliver delightful, effective
                end-to-end experiences that our users can rely on.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We believe in the power of growth for learners and for
                ourselves. We constantly learn and teach to improve our
                offerings, ourselves, and our organization.
              </p>
            </li>
          </ul>
        </article>
        {/*end of Web  development*/}
        <article className="service">
          <div className="service__head">
            <h3>Share your Story</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I first started practicing on Jalaj Academy when I was preparing
                for my matric. I thought Jalaj Academy was only for 9th class.
                Later I found it was much more than that. I am studying everyday
                from Jalaj Academy on many topics
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Jalaj Sir has changed my life by so much. I mostly practice on
                The World of Math. I was amazed by how good this website was. I
                was failing in my first marking period in Math. Now this website
                has helped me so much. I am so good at Math and it has improved
                my work by a lot.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Jalaj Academy is easily the best place that I know for have a
                well - learning about the subject of the school like, Chemistry,
                Maths, Biology, Physics I would really like to thanks all of you
                guys for make this possible!
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Jalaj Academy is easily the best place that I know for have a
                well - learning about the subject of the school like, Chemistry,
                Maths, Biology, Physics I would really like to thanks all of you
                guys for make this possible!
              </p>
            </li>
          </ul>
        </article>
        {/*end of content creation*/}

        <article className="service">
          <div className="service__head">
            <h3>Share your Story</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I teach 12 year olds the beauty of mathematics. Thanks to Jalaj
                and his team, my days are filled with teaching and coaching
                rather than paperwork and frustration. The immediate feedback my
                students receive is so valuable! No more "I did all 30 problems
                wrong? Oh well" kind of attitude. They're motivated, can
                celebrate their strengths and focus on their needs. The success
                they experience is beyond compare! Thank you, thank you, THANK
                YOU!
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Jalaj Sir has opened doors and my life will forever be changed
                as a result of that. I have been taught to think differently, to
                value persistence, to be curious; my plan for my life has been
                changed as a result of what I have been exposed to. I have been
                able to fill in gaps in my education which my younger, careless
                self allowed for. I really am thankful for this wonderful
                program which has given more to me than these words suffice to
                say and for everyone who is a part of it. Especially you, Jalaj
                Sir--thank you above all for being someone I can count on.
              </p>
            </li>
          </ul>
        </article>
        {/*end of content creation*/}
      </div>
    </section>
  );
}

export default Services;
