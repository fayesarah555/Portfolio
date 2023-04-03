import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg";
//  {sarah_CV.pdf} from "../../../assets/sarah_CV.pdf";
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Qui suis-je ?</span>
        <h1>A propos de moi</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>
          Développeur de logiciels hautement motivé et qualifié avec 2 ans d'expérience
         conception, développement et maintenance d'applications web et mobiles. Compétent
         dans une variété de langages de programmation, y compris JavaScript, Python et PHP.
         Une solide expérience en développement Agile et une passion pour la création
         logiciel convivial.

        .</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='../../../assets/sarah_CV.pdf' download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Telecharger mon CV
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About