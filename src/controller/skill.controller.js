const express = require('express');
const buildResponse = require('../helper/buildResponse');
const { isValidSkill, isValidTitle } = require('../helper/validation');
const { getAllSkill, createSkill, deleteSkill, skillUpdate, getSkillById } = require('../service/skill.service');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const data = getAllSkill();
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

router.get('/:id', isValidSkill, (req, res) => {
  try {
    const { id } = req.params;
    const data = getSkillById(id);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});
router.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

router.put('/:id', isValidSkill, isValidTitle, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = skillUpdate(id, title);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

router.delete('/:id', isValidSkill, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkill(id);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});

module.exports = router;
