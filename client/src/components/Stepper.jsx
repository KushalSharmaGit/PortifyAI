import { Check } from "lucide-react";

const Stepper = ({ step }) => {
  const totalSteps = 8;

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= index + 1 ? "bg-primary" : "bg-muted"} text-primary-foreground`}
            >
              {step > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className={`h-1 w-8 sm:w-10 md:w-12 ${step >= index + 2 ? "bg-primary" : "bg-muted"}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
