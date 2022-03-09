import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "TheCodeholic YouTube channel content",
    slug: "thecodeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://pbs.twigmg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description:
      "My name is Zura.<br>I am Web Developer with 9+years of experience,free educational",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA" },
            {
              uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
              text: "Georgia",
            },
            {
              uuid: "b5c09733-a49e-460a-ba8a-526863010729",
              text: "Germany",
            },
            {
              uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
              text: "India",
            },
            {
              uuid: "8d14341b-ec2b-4924-9aea-bda6a53b51fc",
              text: "United Kingdom",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earun",
        data: {
          options: [
            {
              uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
              text: "Javascript",
            },
            {
              uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
              text: "PHP",
            },
            {
              uuid: "b5c09733-a49e-460a-ba8a-526863010729",
              text: "HTML + CSS",
            },
            {
              uuid: "b5c09733-a49e-460a-ba8a-526863010729",
              text: "All of the above",
            },
            {
              uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
              text: "Everything Zura thinks will be good",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question:
          "Which PHP framework videos do you want to see on my channel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earun",
        data: {
          options: [
            {
              uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
              text: "Laravel",
            },
            {
              uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
              text: "Yii2",
            },
            {
              uuid: "b5c09733-a49e-460a-ba8a-526863010729",
              text: "Codeigniter",
            },
            {
              uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
              text: "Symfony",
            },
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel framework  do you love most?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earun",
        data: {
          options: [
            {
              uuid: "31132230-29e0-4857-84ed-317542c7c8dd",
              text: "Laravel 5",
            },
            {
              uuid: "0ab85f86-15ee-4rc0-ba42-793daf243a5d",
              text: "Laravel 6",
            },
            {
              uuid: "748fd679-d983-4d73-8d7b-7bb4abd22254",
              text: "Laravel 7",
            },
            {
              uuid: "f1864724-1009-4bed-94a1-3cfe93dfb82a",
              text: "Laravel 8",
            },
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question:
          "What type of projects do you want to see on my channel built with Laravel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earun",
        data: {
          options: [
            {
              uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea",
              text: "REST API",
            },
            {
              uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440",
              text: "E-commerce",
            },
            {
              uuid: "b5c09733-a49e-460a-ba8a-526863010729",
              text: "Real Estate",
            },
            {
              uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513",
              text: "All of the above",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What is your favourite YouTube channel?",
        description: "null",
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What do you think about TheCodeholic channel?",
        description: "Write your honest opinion.Everything is annonymous",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel-8",
    slug: "laravel-8",
    status: "active",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Flaravel-2&psig=AOvVaw2ihe1QDgeY6MVN2rd3Tmc-&ust=1646814956927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD6tvaNtvYCFQAAAAAdAAAAABAD",
    description:
      "Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application ",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },

  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1184px-Vue.js_Logo_2.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AVue.js_Logo_2.svg&tbnid=_Ere9MMFlUp18M&vet=12ahUKEwiF_42Ujrb2AhXRR2wGHbxQDM8QMygAegQIARA8..i&docid=JKqQ7oJz6e7e2M&w=1184&h=1026&q=vue%203%20wiki%20logo&ved=2ahUKEwiF_42Ujrb2AhXRR2wGHbxQDM8QMygAegQIARA8",
    description:
      "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex",
    created_at: "2021-12-21 18:00:00",
    updated_at: "2021-12-21 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS.svg",
    description:
      "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.It's fast, flexible, and reliable — with zero-runtime",
    created_at: "2021-12-21 18:00:00",
    updated_at: "2021-12-21 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
];
const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      try {
        return axiosClient.post("/logout").then((response) => {
          commit("logout");
          return response;
        });
      } catch (error) {
        const err = error;
        if (err.response) {
          console.log(err.response.status);
          console.log(err.response.data);
        }
      }
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
