function SkillList({ skills }) {
  if (skills.length === 0) {
    return <p>No skills added yet.</p>;
  }

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>• {skill}</li>
      ))}
    </ul>
  );
}

export default SkillList;
