import { AtomCommonContext } from '@/atom-common';
import { Stepper as DesignSystemStepper, StepType as DesignSystemStepType } from '@atom/design-system';
import { ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export interface StepType extends DesignSystemStepType {
  component: ReactNode;
}

export interface StepperChildrenParameters<T, K extends StepType[]> {
  currentStep: K[number]['value'];
  updateStepperState: (value: T) => void;
  resetStepperState: () => void;
  updateCurrentStep: (value: K[number]['value']) => void;
  CurrentStepComponent: K[number]['component'];
  initialValues: T;
}

export interface StepperProps<T, K extends StepType[]> {
  name: string;
  children: (parameters: StepperChildrenParameters<T, K>) => ReactNode;
  steps: K;
  initialValues: T;
}

export const STEPPER_CURRENT_STEP_PREFIX = 'currentStep-';

export const getStepperCurrentStepName = (name: string) => `${STEPPER_CURRENT_STEP_PREFIX}${name}`;

export function Stepper<T, K extends StepType[]>({ name, children, steps, initialValues }: StepperProps<T, K>) {
  const firstStepValue = steps[0].value;

  const [currentStep, setCurrentStep] = useState<StepType['value']>(firstStepValue);

  const { localStorageService } = useContext(AtomCommonContext);

  const initialValuesFromStorage = useRef(localStorageService.getItem<T>(name) || null);

  const updateCurrentStep = useCallback(
    (value: StepType['value']) => {
      setCurrentStep(value);
      localStorageService.setItem(getStepperCurrentStepName(name), value);
    },
    [localStorageService, name]
  );

  const updateStepperState = useCallback((data: T) => localStorageService.setItem(name, data), [name]);

  const resetStepperState = useCallback(() => {
    localStorageService.removeItem(getStepperCurrentStepName(name));
    localStorageService.removeItem(name);

    setCurrentStep(firstStepValue);
  }, [name, firstStepValue]);

  const CurrentStepComponent = useMemo(() => {
    return steps.find((step) => step.value === currentStep)?.component;
  }, [steps, currentStep]);

  useEffect(() => {
    const localStorageCurrentStep = localStorageService.getItem<StepType['value' | null]>(
      getStepperCurrentStepName(name)
    );

    if (localStorageCurrentStep) setCurrentStep(localStorageCurrentStep);
  }, []);

  return (
    <>
      <DesignSystemStepper steps={steps} value={currentStep} />

      {children({
        currentStep,
        updateStepperState,
        updateCurrentStep,
        CurrentStepComponent,
        initialValues: initialValuesFromStorage.current || initialValues,
        resetStepperState
      })}
    </>
  );
}
