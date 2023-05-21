const fs = require('fs');

const path = './storage/storage.json';

function getAllSkill() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id == id);
  if (!filtered.length) throw new Error('id not found');
  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  const item = {
    id: data.length + 1,
    title: title,
  };
  data.push(item);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function deleteSkill(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('id not found');
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function skillUpdate(id, title) {
  const item = { id, title };
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);

  if (filtered.length == data.length) throw new Error('id not found');

  filtered.push(item);
  fs.writeFileSync(path, JSON.stringify(data));

  return filtered;
}

module.exports = {
  getAllSkill,
  createSkill,
  deleteSkill,
  skillUpdate,
  getSkillById,
};
