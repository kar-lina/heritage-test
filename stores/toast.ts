import { defineStore } from "pinia";
type AlertType = "info" | "success" | "error" | "warning";
export const useToastStore = defineStore("toast", () => {
  const toastMessage = ref<string | undefined>(undefined);
  const toastType = ref<AlertType>('info')
  const toastDate = ref<Date | undefined>(undefined);

  const showToast = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
    toastMessage.value = message
    toastType.value = type
    toastDate.value = new Date()
  }

  const clear = () => {
    toastMessage.value = undefined;
    toastType.value = "info";
    toastDate.value = undefined;
  };

  return {
    clear,
    showToast,
    toastMessage,
    toastType,
    toastDate,
  };
});
