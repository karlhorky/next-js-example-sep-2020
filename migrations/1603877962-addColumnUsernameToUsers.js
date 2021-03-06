exports.up = async (sql) => {
  await sql`
    ALTER TABLE users
      ADD COLUMN username VARCHAR(40) UNIQUE;
  `;
};

exports.down = async (sql) => {
  await sql`
    ALTER TABLE users
      DROP COLUMN username;
  `;
};
