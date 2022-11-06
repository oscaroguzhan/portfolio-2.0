export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyHere",
      title: "IsCurrentlyHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
