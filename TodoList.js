import React, { useState } from "react";

export default function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity(event) {
    event.preventDefault();
    if (activity === "") {
      alert("enter val");
    }
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removehandler(index) {
    const updatedListData = listData.filter((elem, id) => {
      return index !== id;
    });

    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }
  return (
    <>
      <div className="container ">
        <div className="header">
          <h1>Todo List Project </h1>

          <form onSubmit={addActivity}>
            <div className="form">
              <input
                required
                type="text"
                className="textfield"
                placeholder="Add Activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
              <button>Add Activity</button>

              <p className="List-heading">Here is Your Data</p>

              {listData !== [] &&
                listData.map((data, index) => {
                  return (
                    <>
                      <p key={index}>
                        <div className="listData">
                          {data}

                          <button onClick={() => removehandler(index)}>
                            Remove
                          </button>
                        </div>
                      </p>
                    </>
                  );
                })}
            </div>
          </form>
        </div>

        {listData.length >= 1 && (
          <button class="btn btn-secondary" onClick={removeAll}>
            Remove all
          </button>
        )}
      </div>
    </>
  );
}
