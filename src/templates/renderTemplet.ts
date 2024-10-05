import {
  TemplateParamsMap,
  TemplateFunction,
  TemplateNames,
  templates,
} from "./templetManager";

export const renderTemplate = <T extends TemplateNames>(
  templateName: T,
  data: TemplateParamsMap[T],
): string => {
  const template: TemplateFunction | undefined = templates[templateName];
  if (!template) {
    throw new Error(`Template "${templateName}" not found.`);
  }
  return template(data);
};
