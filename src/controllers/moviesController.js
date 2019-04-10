const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM movies", (err, movies) => {
      if (err) {
        res.json(err);
      }
      res.render("movies", {
        data: movies
      });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO movies set ?",
      data,
      (err, movie) => {
        console.log(movie);
        res.redirect("/");
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM movies WHERE id = ?", [id], (err, rows) => {
      res.render("movies_edit", {
        data: rows[0]
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newMovie = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE movies set ? where id = ?",
      [newMovie, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query("DELETE FROM movies WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
