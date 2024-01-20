import { Outlet } from "react-router-dom";

function AppLayout() {

  return (
    <>
      <div>
        {/* dynamic */}
        {<Outlet />}
      </div>
    </>
  );
}

export default AppLayout;
