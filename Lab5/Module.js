const module = {
    id: 1, name: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    coure: "online"
  };
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });  
    //   app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    //     const { newTitle } = req.params;
    //     assignment.title = newTitle;
    //     res.json(assignment);
    //   });
    
    
  };
  