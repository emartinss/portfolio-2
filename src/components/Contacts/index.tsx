import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import curriculumLogo from "../../assets/curriculos.png";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin, FaFile } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                Let's talk and{" "}
                <Text as="span" type="heading2" color="brand1">
                  develop solutions for your company
                </Text>
                , together!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My Whatsapp
                </Text>
                <Text color="grey2" type="body2">
                  I'm available for a voice chat, let's about creativity together?
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Talk Now
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My email
                </Text>
                <Text color="grey2" type="body2">
                  Send me an email reporting feedbacks, suggestions and ideas
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() => (window.location.href = `mailto:${userData.emailUser}`)}
                >
                  Send me an email
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="curriculum">
                <FaFile color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My Curriculum
                </Text>
                <Text color="grey2" type="body2">
                  Unlock my resume for a concise overview of my skills and experience. Dive into the details that make me a valuable asset.
                  Your next collaboration starts here.
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://docs.google.com/document/d/1HzT4HW60NnHIvpI8xMqZLrNnLcPRMrfHfDrirl9ODvE/edit?usp=sharing`}
                >
                  Access my resume now
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>

              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  My LinkedIn
                </Text>
                <Text color="grey2" type="body2">
                  We can create more constant interactions as well as a sharing network
                </Text>
                <Text as="a" color="grey2" type="body2" target="_blank" href={linkedInUrl}>
                  Go to LinkedIn now
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
