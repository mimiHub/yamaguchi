import { useState } from "react";

export function useBoardAccordion(items) {
  const [selectedId, setSelectedId] = useState(null);
  const [pendingId, setPendingId] = useState(null);
  const [isPromptOpen, setPromptOpen] = useState(false);

  const selectedItem = items.find((item) => item.id === selectedId);
  const remainingItems = items.filter((item) => item.id !== selectedId);

  // 번호(id) 오름차순으로 별도 정렬 - 이전/다음 탐색 전용
  const sortedByIdAsc = [...items].sort((a, b) => Number(a.id) - Number(b.id));
  const ascIndex = sortedByIdAsc.findIndex((item) => item.id === selectedId);
  const prevItem = ascIndex > 0 ? sortedByIdAsc[ascIndex - 1] : null;
  const nextItem =
    ascIndex >= 0 && ascIndex < sortedByIdAsc.length - 1
      ? sortedByIdAsc[ascIndex + 1]
      : null;

  function handleRowClick(id) {
    const item = items.find((target) => target.id === id);
    if (item.locked) {
      setPendingId(id);
      setPromptOpen(true);
    } else {
      setSelectedId(id);
    }
  }

  function handlePasswordConfirm(password) {
    const item = items.find((target) => target.id === pendingId);
    if (password === item.password) {
      setSelectedId(pendingId);
      setPromptOpen(false);
      return true;
    }
    return false;
  }

  function closePrompt() {
    setPromptOpen(false);
  }

  function closeDetail() {
    setSelectedId(null);
  }

  return {
    selectedItem,
    prevItem,
    nextItem,
    remainingItems,
    isPromptOpen,
    handleRowClick,
    handlePasswordConfirm,
    closePrompt,
    closeDetail,
  };
}
