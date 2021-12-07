import React, { useState } from "react";
import "./MarkForm.css";
import { FormGroup, Label, Col, Input, Button } from "reactstrap";

const MarkForm = () => {
  const noOfSub = [3, 4, 5, 6];
  const [noOfSubChosen, updateNum] = useState(noOfSub[0]);
  const subjects = ["None", "DSA", "OOPS", "DBMS", "OS", "NETWORKS", "DAA"];
  const [selectedGrade, updateSelectedGrade] = useState([]);
  const [selectedSubjects, updateSelected] = useState([]);
  console.log("Subjects ", selectedSubjects);
  console.log("Grades ", selectedGrade);
  const numberOfSubHandler = (event) => {
    updateNum(+event.target.value);
  };
  const selectSubjectHandler = (event, index) => {
    const subjectsChosen = [...selectedSubjects];
    let i = 0;
    for (var sub of selectedSubjects) {
      if (sub.id === index) subjectsChosen.splice(i, 1);
      i++;
    }
    subjectsChosen.push({ id: +index, value: event.target.value });
    updateSelected(subjectsChosen);
  };
  const selectGradeHandler = (event, index) => {
    const gradesChosen = [...selectedGrade];
    let i = 0;
    for (var grade of selectedGrade) {
      if (grade.id === index) gradesChosen.splice(i, 1);
      i++;
    }
    gradesChosen.push({ id: +index, value: event.target.value });
    updateSelectedGrade(gradesChosen);
  };
  return (
    <React.Fragment>
      <FormGroup row>
        <Label for="SelectNoOfSub" sm={2}>
          Number of subjects
        </Label>
        <Col sm={10}>
          <Input
            id="noOfSub"
            name="numSub"
            type="select"
            onChange={(event) => numberOfSubHandler(event)}
          >
            {noOfSub.map((ele) => (
              <option>{ele}</option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      {Array.from(Array(noOfSubChosen)).map((ele, index) => (
        <div className="SubjectGradeContainer">
          <div className="TwoHalf">
            <FormGroup row>
              <Label for="SelectSub" sm={2}>
                Subject
              </Label>
              <Col sm={10}>
                <Input
                  id={index}
                  name="Sub"
                  type="select"
                  onChange={(event) => selectSubjectHandler(event, index)}
                >
                  {subjects.map((ele) => (
                    <option>{ele}</option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
          </div>
          <div className="TwoHalf">
            <FormGroup row>
              <Label for="SelectSub" sm={2}>
                Grade Points
              </Label>
              <Col sm={10}>
                <Input
                  id={index + noOfSubChosen}
                  name="Grade"
                  type="number"
                  min="0"
                  max="10"
                  onChange={(event) => selectGradeHandler(event, index)}
                />
              </Col>
            </FormGroup>
          </div>
        </div>
      ))}
      <div className="Footer">
        <Button color="warning">Submit</Button>
      </div>
    </React.Fragment>
  );
};

export default MarkForm;
