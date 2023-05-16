import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero"></div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image"
      />
      <div className="home-container01">
        <div className="home-card">
          <h1 className="home-text HeadingOne">eMeAsesoría</h1>
          <h1 className="home-text01 HeadingOne">Escoge a los mejores.</h1>
          <span className="home-text02 Lead">
            Somos una Asesoría Fiscal, Laboral y Contable. Le aseguramos un
            servicio magnífico, ven y visítanos para garantizarles un espacio de
            tranquilidad en vuestro día a día.
          </span>
          <div className="home-container02">
            <div className="home-container03">
              <PrimaryPinkButton button="Contáctanos"></PrimaryPinkButton>
            </div>
            <OutlineGrayButton button="Leer más"></OutlineGrayButton>
          </div>
          <div className="home-container04"></div>
        </div>
      </div>
      <section className="home-features">
        <FeatureCard
          text="Tenemos unos precios muy económicos y merece la pena pagarlo ya que el servicio es explendido. Contacta con nosotros para informarte más."
          title="Less Code"
          new_prop="Precio"
          image_src="/playground_assets/rocket1.svg"
          rootClassName="feature-card-root-class-name1"
        ></FeatureCard>
        <FeatureCard
          text="Desde que comenzamos con nuestro sueño, sorprendentemente desde el principio no hemos parado de evolucionar, tanto empresarialmente como personalmente, cada año hemos ido evolucionando tanto nuestros ingresos como nuestra cantidad de clientes."
          title="Fully Responsive"
          new_prop="Evolución"
          image_src="/playground_assets/credit%20card1.svg"
          rootClassName="feature-card-root-class-name2"
        ></FeatureCard>
        <FeatureCard
          text="Nuestro horario es: 9-00 -14:00h / 17:00 - 20:0h"
          new_prop="Horario"
          image_src="/playground_assets/person1.svg"
          rootClassName="feature-card-root-class-name"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text03">Acerca de Nosotros</h1>
          <span className="home-text04">
            <span>
              Desde el primer día nos hemos destacado como Asesores(as) en
              Mairena del Aljarafe. Ofrecemos un rango de servicios pensado para
              que nuestros clientes puedan progresar y crecer. Planificación de
              proyectos, análisis de negocios, manejo de crisis... Para lo que
              nuestros clientes nos necesiten, ahí estaremos. Donde sea, cuando
              sea.
            </span>
            <br></br>
            <br></br>
            <span>
              Algunas veces los desafíos parecen insondables. Cuenten con
              nosotros para compartir y alivianar su carga desde el primer día.
              Agende una reunión si desea conocer cómo nuestros servicios de
              asesoría pueden ayudarle a crecer.
            </span>
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image1"
            />
            <span className="home-text09">
              <span className="Small">&quot;</span>
              <span className="home-text11">
                Mi experiencia con esta agencia de asesoría ha sido excepcional.
                El equipo de expertos trabajó de manera colaborativa conmigo
                para entender mis objetivos y solventarme mis problemas. El
                servicio a medida que ofrecen es realmente único y me sentí
                completamente protegida durante todo el proceso. Estoy muy
                satisfecha con el resultado final y no dudaría en recomendar
                esta agencia a cualquier persona que busque un servicio de
                asesoramiento profesional y de calidad.
              </span>
              <span className="Small">&quot;</span>
              <br className="Small"></br>
              <span className="Small">-Rocío Méndez Fdz</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image2"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image3"
            />
            <h3 className="home-text15">Sobre Nosotros</h3>
            <div className="home-container11">
              <p>
                <span>Nuestra historia</span>
                <br></br>
                <br></br>
                <span>
                  Los proyectos pueden ser desafiantes, por eso estamos aquí,
                  para ayudarles a soportar y alivianar cualquier carga. Somos
                  profesionales honestos y positivos que tienen como prioridad
                  los intereses de sus clientes. Con nuestra experiencia y
                  nuestros servicios ofrecemos capacidad, adaptabilidad y
                  escalabilidad. Desde el año 2018 tenemos una clientela leal en
                  el Aljarafe y alrededores. Contácteme para comenzar a
                  disfrutar los beneficios de trabajar juntos.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image4"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text21 HeadingOne">
                Asesoramiento profesional y de calidad 
              </h2>
              <p className="home-text22">
                Ofrecemos un servicio profesional y a medida que garantiza que
                cada proyecto sea un éxito en línea. Profesionalismo y
                fiabilidad son las palabras que mejor caracterizan a nuestra
                agencia.
              </p>
              <div className="home-container15">
                <img
                  alt="image"
                  src="/playground_assets/team-4-200h.jpg"
                  className="home-image5"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/playground_assets/team-3-200h.jpg"
                  className="home-image6"
                />
                <div className="home-container17"></div>
                <img
                  alt="image"
                  src="/playground_assets/team-2-200h.jpg"
                  className="home-image7"
                />
              </div>
            </div>
          </div>
          <div className="home-container18">
            <a
              href="https://m.facebook.com/profile.php?id=100063573854064"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-container19">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z"></path>
                </svg>
              </div>
            </a>
            <div className="home-container20">
              <a
                href="https://www.instagram.com/emeasesoria/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container21">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                    <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                    <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="home-logos"></div>
        </div>
      </section>
      <section className="home-contaier">
        <div className="home-container22">
          <div className="home-container23">
            <svg viewBox="0 0 1024 1024" className="home-icon06">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text23">Servicio</h2>
        </div>
        <div className="home-container24">
          <div className="home-container25">
            <div className="home-container26"></div>
            <div className="home-container27">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon08">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text24 HeadingOne">Busca y Descubre!</h1>
              <span className="home-text25">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container28">
            <ListItem
              new_prop="1. Asesoramiento Laboral"
              description="Tenemos a nuestra profesional en el ámbito laboral, que les va a proporcionar un gran servicio, y les va a  garantizar un resultado magnífico."
            ></ListItem>
            <ListItem
              title="2. Performance Analyze"
              new_prop="1. Asesoramiento Fiscal"
              description="Si tiene algún problema fiscal, nuestra asesoría es la adecuada, nuestros profesionales en el ámbito fiscal son unos profesionales comprometidos que les garantiza el mejor resultado para su problema."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              new_prop="1. Asesoramiento Contable "
              description="Tenemos una especialista en este tipo de asesoramiento que ofrece un gran servicio y garantiza u servicio estupendo."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
