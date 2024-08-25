@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Inter", system-ui;
}

html {
  scroll-behavior: smooth;
}

.padding {
  padding: 32px;
}

.purple {
  color: #6415ff;
}

.row {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo__img {
  width: 40px;
}

.logo__name {
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #243e63;
  margin: 0px 0px 0px 14px;
}

.row__anchors {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 200ms ease;
}

.hover:hover {
    text-decoration: underline;
    color: white;
    border: 2px none lightgray;
    background-color: #6415ff;
    padding: 8px 12px;
    border-radius: 16px;
    transition: all 200ms ease;
}

.row__anchors--margin {
  margin: 0 26px;
  color: #243e63;
}

.row__login {
  margin: 0 24px 0 48px;
}

.btn {
  background-color: #6415ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 50px;
  border: none;
}

/* 

HEADER LANDING PAGE

*/

.header__row {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 0;
}

h1 {
  font-size: 40px;
}

.header__description--margin {
  font-size: 18px;
  margin: 24px 0;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

.header__description--wrapper {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 24px 192px 20px 32px;
  border-radius: 50px;
  border: 3px solid lightgray;
  position: relative;
  width: 100%;
}

.header__input {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__input--size {
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
}

.header__button {
  position: absolute;
}

.btn__get-started {
  margin: 8px 8px 8px 0;
  padding: 16px 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__trusted-customers {
  font-weight: 700;
  font-size: 13px;
  color: #a0aec0;
  margin-top: 150px;
  width: 100%;
  letter-spacing: 0.05em;
  height: 100%;
}

.header__trusted-customer {
  width: 400px;
  opacity: 0.6;
  margin-top: 20px;
}

.header__image {
  width: 60%;
}

.header__imager {
  width: 100%;
}

/* 

FEATURES

*/

.container {
  padding: 80px 0;
  display: flex;
}

.container__row {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.container__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container__features {
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.1em;
  margin: 0 0 16px;
}

h2 {
  font-size: 56px;
  font-weight: bolder;
  text-align: center;
}

.container__text {
  font-size: 18px;
  color: gray;
  font-weight: 500;
  text-align: center;
  max-width: 625px;
  margin: 24px 0;
}

.services {
  display: flex;
  flex-wrap: wrap;
}

.service {
  display: flex;
  width: calc(100% / 3);
  padding: 40px;
}

.fa-solid {
  font-size: 24px;
  border: 1px solid lightgray;
  color: #23487e;
  padding: 20px;
  padding: 1rem;
  border-radius: 50%;
}

.service__description {
  display: flex;
  flex-direction: column;
  margin: 8px 0 0 16px;
}

h3 {
  font-size: 24px;
  color: #243e63;
}

.row__description {
  color: #7c8ba1;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  line-height: 2;
}

/*

QUALITY WORK

*/

.row__header {
  padding: 48px 0;
  width: 50%;
  max-width: 450px;
}

.purple__quality-work {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.row__title {
  text-align: left;
  margin-top: 20px;
}

.row__des {
  font-size: 18px;
  font-weight: 500;
  color: #7c8ba1;
  margin-top: 20px;
}

p {
  line-height: 1.75;
}

.btn__learn-more {
  padding: 12px 32px;
  margin-top: 32px;
}

.row__figure {
  width: 50%;
}

.quality-work-image {
  width: 500px;
}

/*

STEPS

*/

.row__steps {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.steps__figure1 {
  width: 50%;
}

.figure1 {
  width: 100%;
}

.steps__header {
  display: flex;
  flex-direction: column;
  margin-left: 64px;
}

.row__title {
  text-align: left;
}

.steps__step {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 48px;
}

.steps__number {
  font-size: 40px;
  font-weight: 700;
  color: #cbd5e0;
  width: 10%;
}

.steps__description {
  margin-left: 24px;
}

h4 {
  font-size: 20px;
  color: #243e63;
}

.p__text {
  color: #718096;
  margin-top: 16px;
  font-weight: 500;
}

/*

VALUES

*/

.value__image {
  width: 100%;
}

.value__principles--wrapper {
  display: flex;
}

.value__principles--column {
  display: flex;
  flex-direction: column;
}

.value__principles--title {
  display: flex;
  align-items: center;
}

.fa-dollar-sign {
  background-color: #9ae6b4;
  padding: 8px 12px;
  font-size: 20px;
  border: none;
  color: darkgreen;
}

.fa-suitcase {
  background-color: #feb2b2;
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  color: darkred;
}

.value__affordable {
  margin-left: 18px;
}

.value__principles--desc {
  margin-top: 20px;
  max-width: 88%;
}

.value__description {
  color: #718096;
  font-size: 18px;
}

/*

PRICING

*/

.container__pricing {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 24px;
}

.plans {
  display: flex;
  flex-wrap: wrap;
}

.plan {
  width: calc(100% / 3.3);
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;
  align-items: center;
  text-align: center;
  margin: 64px 32px 0 0;
  padding: 8px 32px 0 32px;
  border-radius: 20px;
}

.plan__design {
  background-color: transparent;
  border-top: #9ae6b4;
}

.plan__design2 {
  background-color: lightblue;
}
.plan__design3 {
  background-color: transparent;
}

.plan__box {
}

.plan__option {
  padding: 32px 0;
  border-bottom: 3px solid lightgray;
}

h5 {
  font-size: 24px;
  width: 100%;
}

h6 {
  font-size: 54px;
  letter-spacing: 0.02em;
  margin: 16px;
}

.plan__option--date {
  font-size: 20px;
  font-weight: 700;
  color: #e2e2e2;
}

.plan__description {
  padding: 32px 32px;
  width: 100%;
  border-bottom: 3px solid lightgray;
}

.plan__description--who {
  font-weight: 600;
  font-size: 24px;
}

.plan__description--info {
  font-size: 18px;
  color: #718096;
  font-weight: 500;
  margin-top: 16px;
}

.plan__button {
  padding: 32px 32px;
}

.btn__buy-now {
  padding: 20px 48px;
  color:black;
  background-color: purple;
}

/* TESTIMONIAL */

.row-testi{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 160px;
}

.testi-wrap{
  display: flex;
  justify-content: space-between;
}

.testi-left{
  width: 50%;
}

.testi-img{
  margin-top: 160px;
  width: 100%;
}

.testi-right{
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
}

.h2-testi{
  color: navy;
  font-size: 16px;
}

.h1-testi{
  font-size: 48px;
}

.testi-para{
  font-size: 1.125rem;
color: gray;
margin-top: 24px;
line-height: 1.625;
font-weight: 500;
}

.testi-main{
  margin-top: 40px;
}

.testi-stars{
  color: gold;
}

.user-testi{
  margin: 16px 0 32px 0;
line-height: 1.625;
font-weight: 500;
color: darkgray;
}

.testi-wrap1{
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}

.charl-testi-img{
  width: 80px;
  height: 80px;
  margin-top: 30px;
  border-radius: 9999px;
}

.charli-testi-wrapper{
  display: flex;
  justify-content: space-between;
}

.testi-info{
margin: 46px 26px;
}

.testi-name{
font-size: 20px;
font-weight: 700;
}

.testi-job{
color: lightgray;
}
.testi-buttons{
margin-top: 46px;
}

.testi-button{
color: navy;
font-size: 20px;
border-radius: 9999px;
padding: 16px;
margin: 0 12px;
background-color: aqua;
border: none;
transition: 300ms ease;
}


 /* PRE-FOOTER */

 .pre-foot-row{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 56px;
}

.pre-foot-wrap{
  max-width: 1200px;
  background-color: blue
  ;
  border-radius: 14px;
  padding: 96px 0;
}

.pre-foot-text{
  display: flex;
  align-items: center;
}

.text-left{
  width: 50%;
}

.text-right{
  width: 50%;
  display: flex;
  padding-left: 64px;
  padding-bottom: 40px;
}

.pre-foot-button{
  border: 1px solid;
  width: 160px;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  border-radius: 30px;
  background-color: salmon;
  color: white;
  border-color: transparent;
  display: flex;
  justify-content: center;
  opacity: 1;
  margin-left: 32px;
  margin-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.pre-foot-button:hover{
  opacity: 0.9;
  background-color: rgb(245 101 101);
}

.pre-foot-button2:hover{
  background-color: navy;
  color: slateblue;
}

.pre-foot-button2{
  border: 1px solid;
width: 160px;
font-size: 16px;
font-weight: bold;
padding: 20px;
border-radius: 30px;
background-color: aqua; 
border-color: royalblue;
display: flex;
justify-content: center;
opacity: 1;
margin-left: 24px;
margin-right: 24px;
margin-top: 8px;
margin-bottom: 8px;
}

.pre-foot-h1{
  font-size: 36px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 36px;
  padding-right: 64px;
}


/*

FOOTER

*/

footer {
  background-color: #6415ff;
}

.no-cursor {
  cursor: not-allowed;
}

.links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 32px 32px 84px 32px;
  border-bottom: 2px solid lightgray;
}

.link {
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  align-items: center;
}

.link--whites {
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.link--white {
  font-size: 15px;
  color: white;
  font-weight: 500;
  margin-top: 24px;
}

.row__footer {
  display: flex;
  flex-direction: column;
}

.footer__copyright {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 64px 32px;
  align-items: center;
}

.footer__name {
  display: flex;
}

.logo__copyright {
  filter: invert(100%);
  width: 40px;
  border-radius: 10px;
}

.logo__n {
  color: white;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 900;
  margin-left: 12px;
  letter-spacing: 0.05em;
}

.footer__treact-copyright {
  font-size: 18px;
  color: #cbd5e0;
}

.fa-brands {
  margin-left: 24px;
  border: 1px solid white;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
}

@media (max-width: 768px) {
    .service {
        width: 50%;
    }

    .plan {
        width: 100%;
    }

    
}

@media (max-width: 550px) {
    .header__row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .header__description--wrapper {
        width: 100%;
    }

    .header__imager {
        width: 300px;
    }

    .service {
        width: 100%;
    }

    .row {
        display: flex;
        flex-direction: column;
        
    }

    .quality-work-image {
        width: 100%;
    }
}