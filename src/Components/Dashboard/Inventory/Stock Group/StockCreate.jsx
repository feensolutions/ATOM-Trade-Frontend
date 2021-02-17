import React, { useContext, useEffect, useState } from "react";
import "./StockGroup.css";
import { RecommendationMenu } from "../../../ComponentsImport";
import { StockGroupContext } from "../../../../API";
import { useParams } from "react-router-dom";
const StockCreate = (props) => {
  props.Back();
  const [stockGroup, setStockGroup] = useContext(StockGroupContext);

  const [inputData, setInputData] = useState({
    group: "",
    under: "",
  });

  const setGroupValue = (e) => {
    // Function to set group name goes here
    setInputData({
      ...inputData,
      group: e.target.value,
    });
  };

  const setUnderValue = (e) => {
    // Function to set under value goes here
    setInputData({
      ...inputData,
      under: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStockGroup([
      ...stockGroup,
      {
        company: name,
        name: inputData.group,
        under: inputData.under,
      },
    ]);
  };
  const [data, setData] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    const loadData = () => {
      let res = [];

      stockGroup.forEach((element) => {
        if (element.company === name || element.company === "*") {
          res.push(element.name);
        }
      });
      setData(res);
    };
    loadData();
  }, []);

  return (
    <div className="row">
      <div className="col-lg-10">
        <div id="stock_group_create_form">
          <div className="form_header">
            <span className="form_heading"> New Stock Group</span>
          </div>
          <form name="stock_group_create_form" className="form">
            <div className=" form-group input">
              <label htmlFor="group">Group Name</label>
              <input
                type="text"
                id="group"
                name="group"
                className="form-control"
                value={inputData.group}
                onChange={(e) => setGroupValue(e)}
              />
            </div>

            <div className=" form-group input">
              <label htmlFor="under">Under</label>
              <input
                type="text"
                id="under"
                name="under"
                className="form-control"
                value={inputData.under}
                onChange={(e) => setUnderValue(e)}
              />
            </div>

            <div className="button_container">
              <button
                type="submit"
                className="btn create_btn"
                onClick={(e) => onSubmit(e)}
              >
                Add Group
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-2">
        <RecommendationMenu title="Groups" data={data} />
      </div>
    </div>
  );
};

export default StockCreate;
