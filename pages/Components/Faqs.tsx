import React, { useState } from "react";
import SectionsHead from "./SectionsHead";
import sectionIcon from "@/public/image/faqs.png";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa6";

const Faqs = () => {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);

  const onClickQues1 = () => {
    setQuestion1((current) => !current);
  };
  const onClickQues2 = () => {
    setQuestion2((current) => !current);
  };
  const onClickQues3 = () => {
    setQuestion3((current) => !current);
  };
  const onClickQues4 = () => {
    setQuestion4((current) => !current);
  };
  const onClickQues5 = () => {
    setQuestion5((current) => !current);
  };
  const onClickQues6 = () => {
    setQuestion6((current) => !current);
  };
  const onClickQues7 = () => {
    setQuestion7((current) => !current);
  };
  const onClickQues8 = () => {
    setQuestion8((current) => !current);
  };
  const onClickQues9 = () => {
    setQuestion9((current) => !current);
  };
  const onClickQues10 = () => {
    setQuestion10((current) => !current);
  };

  return (
    <div className="faqs-container">
      <SectionsHead
        SectionTitle="Frequently Asked Questions"
        sectionAltText="faqs-alt-text"
        sectionIcon={sectionIcon}
      />
      <div className="questions-and-answer-container-faqs">
        <div className="questions-and-answer-box-faqs">
          {/* question 1 */}
          <div className="questions-answer">
            <div className="question">
              <h3>1{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question1 ? (
                <FaAngleDown onClick={onClickQues1} />
              ) : (
                <FaAngleRight onClick={onClickQues1} />
              )}
            </div>

            {question1 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 2 */}
          <div className="questions-answer">
            <div className="question">
              <h3>2{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question2 ? (
                <FaAngleDown onClick={onClickQues2} />
              ) : (
                <FaAngleRight onClick={onClickQues2} />
              )}
            </div>

            {question2 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 3 */}
          <div className="questions-answer">
            <div className="question">
              <h3>3{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question3 ? (
                <FaAngleDown onClick={onClickQues3} />
              ) : (
                <FaAngleRight onClick={onClickQues3} />
              )}
            </div>

            {question3 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 4 */}
          <div className="questions-answer">
            <div className="question">
              <h3>4{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question4 ? (
                <FaAngleDown onClick={onClickQues4} />
              ) : (
                <FaAngleRight onClick={onClickQues4} />
              )}
            </div>

            {question4 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 5 */}
          <div className="questions-answer">
            <div className="question">
              <h3>5{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question5 ? (
                <FaAngleDown onClick={onClickQues5} />
              ) : (
                <FaAngleRight onClick={onClickQues5} />
              )}
            </div>

            {question5 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 6 */}
          <div className="questions-answer">
            <div className="question">
              <h3>6{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question6 ? (
                <FaAngleDown onClick={onClickQues6} />
              ) : (
                <FaAngleRight onClick={onClickQues6} />
              )}
            </div>

            {question6 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 7 */}
          <div className="questions-answer">
            <div className="question">
              <h3>7{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question7 ? (
                <FaAngleDown onClick={onClickQues7} />
              ) : (
                <FaAngleRight onClick={onClickQues7} />
              )}
            </div>

            {question7 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 8 */}
          <div className="questions-answer">
            <div className="question">
              <h3>8{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question8 ? (
                <FaAngleDown onClick={onClickQues8} />
              ) : (
                <FaAngleRight onClick={onClickQues8} />
              )}
            </div>

            {question8 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 9 */}
          <div className="questions-answer">
            <div className="question">
              <h3>9{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question9 ? (
                <FaAngleDown onClick={onClickQues9} />
              ) : (
                <FaAngleRight onClick={onClickQues9} />
              )}
            </div>

            {question9 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>

          {/* question 10 */}
          <div className="questions-answer">
            <div className="question">
              <h3>10{"."} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
              {question10 ? (
                <FaAngleDown onClick={onClickQues10} />
              ) : (
                <FaAngleRight onClick={onClickQues10} />
              )}
            </div>

            {question10 && (
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                harum quos earum a voluptatibus, corrupti sunt dolores, officiis
                illo facere nulla temporibus voluptates beatae cumque at
                assumenda optio. Accusamus, eligendi.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
