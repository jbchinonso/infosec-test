import request from "supertest";
import app from '../src/app'



    
describe("GET /:position", () => {
        

      test("Ensure json is returned", (done) => {
        request(app)
          .get("/api/5")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
      });
        
        

        test("Ensure correct result is returned with value of 5", (done) => {
        request(app)
          .get("/api/5")
          .expect("Content-Type", /json/)
          .expect({ totalTime: 0, sequence: [1, 2, 3, 5, 8, 13, 21] })
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
        });
    
    
        test("Ensure correct result is returned with value of 10", (done) => {
            request(app)
              .get("/api/10")
              .expect("Content-Type", /json/)
              .end(function (err, res) {
                  if (err) return done(err);
                  expect(res.body.totalTime).toBeLessThanOrEqual(1)
                  expect(res.body.sequence).toEqual([
                    13, 21, 34, 55, 89, 144, 233,
                  ]);
                return done();
              });
        });



        test("Ensure n is greater than 4 and less than 100", (done) => {
            request(app)
              .get("/api/100")
              .expect("Content-Type", /json/)
              .expect(400)
              .end(function (err, res) {
                  if (err) return done(err);
                  expect(res.statusCode).toBe(400);
                  expect(res.body).toBe(
                    "input must be greater than 4 and less than 100"
                  );
                return done();
            });
            
        });
  
  
        test("Ensure n is a number", (done) => {
          request(app)
            .get("/api/name")
            .expect("Content-Type", /json/)
            .expect(400)
            .end(function (err, res) {
              if (err) return done(err);
              expect(res.statusCode).toBe(400);
              expect(res.body).toBe("Only number inputs are allowed");
              return done();
            });
        });
        
        
        
        
    });