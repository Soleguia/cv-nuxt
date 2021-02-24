export { default as CvEducation } from '../..\\components\\cv-education.vue'
export { default as CvExperience } from '../..\\components\\cv-experience.vue'
export { default as CvPresentation } from '../..\\components\\cv-presentation.vue'
export { default as CvSkills } from '../..\\components\\cv-skills.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyCvEducation = import('../..\\components\\cv-education.vue' /* webpackChunkName: "components_cv-education" */).then(c => c.default || c)
export const LazyCvExperience = import('../..\\components\\cv-experience.vue' /* webpackChunkName: "components_cv-experience" */).then(c => c.default || c)
export const LazyCvPresentation = import('../..\\components\\cv-presentation.vue' /* webpackChunkName: "components_cv-presentation" */).then(c => c.default || c)
export const LazyCvSkills = import('../..\\components\\cv-skills.vue' /* webpackChunkName: "components_cv-skills" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
