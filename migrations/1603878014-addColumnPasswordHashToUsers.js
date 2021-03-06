exports.up = async (sql) => {
  await sql`
    ALTER TABLE users
      ADD COLUMN password_hash VARCHAR(100);
  `;
};

exports.down = async (sql) => {
  await sql`
    ALTER TABLE users
      DROP COLUMN password_hash;
  `;
};
