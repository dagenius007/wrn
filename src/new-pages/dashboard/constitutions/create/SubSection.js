import React from "react";
import { Input } from "antd";

const SubSection = ({ sub_sections, index, setStructure }) => {
  const sub_section_obj = {
    id: "",
    title: "",
    desc: "",
    sub_sections: [
      {
        id: "",
        title: "",
        desc: ""
      }
    ]
  };

  return (
    <section style={{ marginLeft: "40px" }}>
      <h4>Sub Section</h4>
      <Input
        placeholder="Section title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Section description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <div className="d-flx">
        <button
          type="button"
          onClick={() => {
            setStructure(structure => {
              let parts = structure.parts;
              parts[partIndex].articles[index] = {
                ...parts[partIndex].articles[index],
                sections: [
                  ...parts[partIndex].articles[index].sections,
                  sectionObject
                ]
              };

              return {
                ...structure,
                parts
              };
            });
          }}
        >
          Add Sub Section
        </button>

        <button
          type="button"
          onClick={() => {
            setStructure(structure => {
              let parts = structure.parts;
              parts[partIndex].articles[index] = {
                ...parts[partIndex].articles[index],
                sections: [
                  ...parts[partIndex].articles[index].sections,
                  sectionObject
                ]
              };

              return {
                ...structure,
                parts
              };
            });
          }}
        >
          Remove Sub Section
        </button>
      </div>
    </section>
  );
};

export default SubSection;
