import request from "supertest";
import app from '../src/app'



    
describe("GET /:position", () => {
        

      test("Ensure json is returned", (done) => {
        request(app)
          .get("/5")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
      });
        
        

        test("Ensure correct result is returned with value of 5", (done) => {
        request(app)
          .get("/5")
          .expect("Content-Type", /json/)
          .expect({ totalTime: 0, sequence: [1, 2, 3, 5, 8, 13, 21] })
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
        });
    
    
        test("Ensure correct result is returned with value of 10", (done) => {
            request(app)
              .get("/10")
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
              .get("/100")
              .expect("Content-Type", /json/)
              .expect(200)
              .end(function (err, res) {
                  if (err) return done(err);
                  expect(res.body.totalTime).toBeLessThanOrEqual(1)
                  expect(res.statusCode).toBe(200);
                  expect(res.body.sequence).toBe(
                    "input must be greater than 4 and less than 100"
                  );
                return done();
            });
            
        });
        
        
        
        
    });