import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const MealPlanningSamples = ({ planHeading, plan }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border border-gray-200 rounded-xl bg-white">
      <CardBody className="p-6">
        <Typography
          variant="h4"
          className="text-orange-600 font-semibold text-center tracking-wide"
        >
          {planHeading}
        </Typography>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-orange-500 text-white text-sm uppercase tracking-wider">
                <th className="px-4 py-3 text-left">Meal</th>
                <th className="px-4 py-3 text-left">Plan</th>
              </tr>
            </thead>

            <tbody>
              {plan.map((row, i) =>
                row.meal === "Total" ? (
                  <TotalRow key={i} row={row} />
                ) : (
                  <PlansRow key={i} row={row} />
                )
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

const PlansRow = ({ row }) => {
  return (
    <tr className="border-b last:border-none hover:bg-orange-50 transition">
      <td className="px-4 py-3 font-medium text-gray-800">{row.meal}</td>
      <td className="px-4 py-3 space-y-1">
        {row.plan.map((calories, i) => (
          <p key={i} className="text-gray-600">{calories}</p>
        ))}
      </td>
    </tr>
  );
};

const TotalRow = ({ row }) => {
  return (
    <tr className="bg-orange-100 font-semibold text-gray-900">
      <td className="px-4 py-3">{row.meal}</td>
      <td className="px-4 py-3">{row.plan}</td>
    </tr>
  );
};

export default MealPlanningSamples;
