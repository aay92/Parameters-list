import React, { useState, useEffect } from "react";

// Определяем интерфейсы
interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

// Компонент для редактирования параметров
const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );

  useEffect(() => {
    setParamValues(model.paramValues);
  }, [model]);

  const handleChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map((pv) =>
      pv.paramId === paramId ? { ...pv, value } : pv
    );
    setParamValues(updatedParamValues);
  };

  const buttonAlert = () => {
    console.log(getModel());
    alert(
      `New paramId: ${paramValues[0].value},
       new value: ${paramValues[1].value}`
    );
  };

  const getModel = (): Model => {
    return { paramValues };
  };

  return (
    <div className="space-y-4">
      {params.map((param) => (
        <div key={param.id} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            {param.name}
          </label>
          <input
            type="text"
            value={
              paramValues.find((pv) => pv.paramId === param.id)?.value || ""
            }
            onChange={(e) => handleChange(param.id, e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      ))}
      <button
        onClick={() => buttonAlert()}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
        transform transition-all duration-200 ease-in-out 
        hover:scale-105 hover:bg-blue-600 
        active:scale-95 active:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Get Model
      </button>
    </div>
  );
};

// Пример использования компонента
const App: React.FC = () => {
  const params: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
    ],
  };

  return (
    <div className="p-4">
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
