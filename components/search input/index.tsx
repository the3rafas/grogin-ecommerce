"use client";

import { RiSearchLine } from "@remixicon/react";
import { TextInput } from "@tremor/react";

export default function SearchInput() {
  return (
    <div>
      <TextInput
        icon={RiSearchLine}
        placeholder="Search for products, categories or brands..."
      />
    </div>
  );
}
