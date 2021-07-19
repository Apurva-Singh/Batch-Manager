import React, { useState } from "react";
import {Switch} from "@headlessui/react";

interface Props{
 
}

const ToggleSwitch: React.FC<Props>=(props)=>{
    const [enabled, setEnabled] = useState(false)

    return(
        <Switch.Group>
      <div className="flex items-center">
        <Switch.Label as="p" passive className="mr-4">Show Password</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-primary' : 'bg-gray-200'
          } focus:outline-none relative inline-flex items-center h-6 rounded-full w-11 transition-colors `}
        >
          <span
          aria-hidden="true"
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
    );
};
ToggleSwitch.defaultProps={
}

export default ToggleSwitch;