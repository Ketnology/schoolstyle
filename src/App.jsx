import React from "react";
import "./App.css";
import Routers from "./Route";
import AppLayout from "./Layout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Employess from "./Components/Employess/Employess";
import Calendar from "./Components/Screens/Calendar";
import Contact from "./Components/Screens/Contact";
import Policies from "./Components/Screens/Policies";
import FileManager from "./Components/Screens/FileManger";
import AllEmployess from "./Components/Employess/AllEmployess";
import Holiday from "./Components/Employess/Holiday";
import Leaves from "./Components/Employess/Leaves";
import LeavesEmployee from "./Components/Employess/LeavesEmployee";
import LeaveSettings from "./Components/Employess/LeaveSettings";
import Attendance from "./Components/Employess/Attendance";
import AttendanceEmployee from "./Components/Employess/AttendanceEmployee";
import Departments from "./Components/Employess/Departments";
import Designation from "./Components/Employess/Designation";
import TimeSheet from "./Components/Screens/TimeSheet";
import ShiftSchedule from "./Components/Screens/ShiftSchedule";
import OverTime from "./Components/Employess/OverTime";
import Clients from "./Components/Screens/Clients";
import Projects from "./Components/Projects/Projects";
import TaskBoard from "./Components/Projects/TaskBoard";
import Leads from "./Components/Screens/Leads";
import Tickets from "./Components/Screens/Tickets";
import Estimates from "./Components/Hr/Sales/Estimates";
import Invoices from "./Components/Hr/Sales/Invoices";
import Payment from "./Components/Hr/Sales/Payment";
import Expenses from "./Components/Hr/Sales/Expenses";
import ProvidentFund from "./Components/Hr/Sales/ProvidentFund";
import Taxes from "./Components/Hr/Sales/Taxes";
import Categories from "./Components/Hr/Accounting/Categories";
import Budget from "./Components/Hr/Accounting/Budget";
import BudgetExpenses from "./Components/Hr/Accounting/BudgetExpenses";
import BudgetRevenue from "./Components/Hr/Accounting/BudgetRevenue";
import EmployeeSalary from "./Components/Hr/Payroll/EmployeeSalary";
import SalaryView from "./Components/Hr/Payroll/SalaryView";
import PayrollItems from "./Components/Hr/Payroll/PayrollItems";
import ExpenseReports from "./Components/Hr/Reports/ExpenseReports";
import InvoiceReports from "./Components/Hr/Reports/InvoiceReports";
import PaymentReports from "./Components/Hr/Reports/PaymentReports";
import ProjectReports from "./Components/Hr/Reports/ProjectReports";
import TaskReport from "./Components/Hr/Reports/TaskReport";
import UserReports from "./Components/Hr/Reports/UserReports";
import EmployeeReports from "./Components/Hr/Reports/EmployeeReports";
import PayslipReport from "./Components/Hr/Reports/PayslipReport";
import AttendanceReport from "./Components/Hr/Reports/AttendanceReport";
import LeaveReport from "./Components/Hr/Reports/LeaveReport";
import DailyReport from "./Components/Hr/Reports/DailyReport";
import PerformanceIndicator from "./Components/Performance/Performance/PerformanceIndicator";
import Performance from "./Components/Performance/Performance/Performance";
import PerformanceAppraisal from "./Components/Performance/Performance/PerformanceAppraisal";
import GoalList from "./Components/Performance/Goals/GoalList";
import GoalType from "./Components/Performance/Goals/GoalType";
import TrainingList from "./Components/Performance/Training/TrainingList";
import Trainers from "./Components/Performance/Training/Trainers";
import TrainingType from "./Components/Performance/Training/TrainingType";
import Promotion from "./Components/Performance/Promotion";
import Resignation from "./Components/Performance/Resignation";
import Termination from "./Components/Performance/Termination";
import Assets from "./Components/Administration/Assets";
import UserDashboard from "./Components/Administration/Jobs/UserDashboard";
import JobsDashboard from "./Components/Administration/Jobs/JobsDashboard";
import Jobs from "./Components/Administration/Jobs/Jobs";
import ManageResume from "./Components/Administration/Jobs/ManageResume";
import ShortListCandidates from "./Components/Administration/Jobs/ShortListCandidates";
import InterviewQuestions from "./Components/Administration/Jobs/InterviewQuestions";
import OfferApproval from "./Components/Administration/Jobs/OfferApproval";
import ExperienceLevel from "./Components/Administration/Jobs/ExperienceLevel";
import Canditates from "./Components/Administration/Jobs/Canditates";
import ScheduleTiming from "./Components/Administration/Jobs/ScheduleTiming";
import ApptitudeResult from "./Components/Administration/Jobs/ApptitudeResult";
import KnowledgeBase from "./Components/Administration/KnowledgeBase";
import Activities from "./Components/Administration/Activities";
import Users from "./Components/Administration/Users";
import Settings from "./Components/Administration/Settings/Settings";
import SettingsLayout from "./Layout/SettingsLayout";
import Localization from "./Components/Administration/Settings/Localization";
import EmployeeProfile from "./Pages/Profile/EmployeeProfile";
import CLientProfile from "./Pages/Profile/CLientProfile";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./Pages/Auth/Register";
import Four0Four from "./Pages/ErrorPages/Four0Four";
import Five00 from "./Pages/ErrorPages/Five00";
import Subscription from "./Pages/Subscription/Admin/Subscription";
import SubscriptionCompany from "./Pages/Subscription/Company/SubscriptionCompany";
import Subscribed from "./Pages/Subscription/Companies/Subscribed";
import Search from "./Pages/Pages/Search";
import Faq from "./Pages/Pages/Faq";
import Terms from "./Pages/Pages/Terms";
import PrivacyPolicy from "./Pages/Pages/PrivacyPolicy";
import BlankPage from "./Pages/Pages/BlankPage";
import Alerts from "./Components/UiComponents/BaseUi/Alerts";
import Accordion from "./Components/UiComponents/BaseUi/Accordion";
import Avatar from "./Components/UiComponents/BaseUi/Avatar";
import Badges from "./Components/UiComponents/BaseUi/Badges";
import Button from "./Components/UiComponents/BaseUi/Button";
import ButtonsGroup from "./Components/UiComponents/BaseUi/ButtonsGroup";
import BreadCrumb from "./Components/UiComponents/BaseUi/BreadCrumb";
import Card from "./Components/UiComponents/BaseUi/Card";
import Carousel from "./Components/UiComponents/BaseUi/Carousel";
import DropDowm from "./Components/UiComponents/BaseUi/DropDowm";
import Grid from "./Components/UiComponents/BaseUi/Grid";
import Images from "./Components/UiComponents/BaseUi/Images";
import LightBox from "./Components/UiComponents/BaseUi/LightBox";
import Media from "./Components/UiComponents/BaseUi/Media";
import Modal from "./Components/UiComponents/BaseUi/Modal";
import OffCanvas from "./Components/UiComponents/BaseUi/OffCanvas";
import Pagination from "./Components/UiComponents/BaseUi/Pagination";
import Popover from "./Components/UiComponents/BaseUi/Popover";
import Progress from "./Components/UiComponents/BaseUi/Progress";
import Placeholder from "./Components/UiComponents/BaseUi/Placeholder";
import RangeSlider from "./Components/UiComponents/BaseUi/RangeSlider";
import Spinners from "./Components/UiComponents/BaseUi/Spinners";
import SweetAlert from "./Components/UiComponents/BaseUi/SweetAlert";
import Tab from "./Components/UiComponents/BaseUi/Tab";
import Toast from "./Components/UiComponents/BaseUi/Toast";
import Tooltip from "./Components/UiComponents/BaseUi/Tooltip";
import Typography from "./Components/UiComponents/BaseUi/Typography";
import Video from "./Components/UiComponents/BaseUi/Video";
import Ribbon from "./Components/UiComponents/Elements/Ribbon";
import ClipBoard from "./Components/UiComponents/Elements/ClipBoard";
import DragDrop from "./Components/UiComponents/Elements/DragDrop";
import Rating from "./Components/UiComponents/Elements/Rating";
import TextEditor from "./Components/UiComponents/Elements/TextEditor";
import Counter from "./Components/UiComponents/Elements/Counter";
import ScrollBar from "./Components/UiComponents/Elements/ScrollBar";
import Notification from "./Components/UiComponents/Elements/Notification";
import StickyNote from "./Components/UiComponents/Elements/StickyNote";
import TimeLine from "./Components/UiComponents/Elements/TimeLine";
import HorizontalTimeLine from "./Components/UiComponents/Elements/HorizontalTimeLine";
import FormWizard from "./Components/UiComponents/Elements/FormWizard";
import ApexChart from "./Components/UiComponents/Charts/ApexChart";
import Charts from "./Components/UiComponents/Charts/Charts";
import MorrisChart from "./Components/UiComponents/Charts/MorrisChart";
import PeityChart from "./Components/UiComponents/Charts/PeityChart";
import C3Chart from "./Components/UiComponents/Charts/C3Chart";
import BasicInput from "./Components/UiComponents/Forms/BasicInput";
import FormInputGroups from "./Components/UiComponents/Forms/FormInputGroups";
import FormHorizontal from "./Components/UiComponents/Forms/FormHorizontal";
import FormVertical from "./Components/UiComponents/Forms/FormVertical";
import FormMask from "./Components/UiComponents/Forms/FormMask";
import FormValidation from "./Components/UiComponents/Forms/FormValidation";
import FormSelet2 from "./Components/UiComponents/Forms/FormSelet2";
import FileUpload from "./Components/UiComponents/Forms/FileUpload";
import BasicTable from "./Components/UiComponents/Table/BasicTable";
import DataTables from "./Components/UiComponents/Table/DataTables";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Otp from "./Pages/Auth/Otp";
import LockScreen from "./Pages/Auth/LockScreen";
import ThemeSettings from "./Components/Administration/Settings/ThemeSettings";
import RolesAndPermission from "./Components/Administration/Settings/RolesAndPermission";
import EmailSettings from "./Components/Administration/Settings/EmailSettings";
import PerformanceSettings from "./Components/Administration/Settings/PerformanceSettings";
import ApprovalSettings from "./Components/Administration/Settings/ApprovalSettings";
import InvoiceSettings from "./Components/Administration/Settings/InvoiceSettings";
import SalarySettings from "./Components/Administration/Settings/SalarySettings";
import NotificationSettings from "./Components/Administration/Settings/NotificationSettings";
import ChangePassword from "./Pages/Auth/ChangePassword";
import LeaveTypeSettings from "./Components/Administration/Settings/LeaveTypeSettings";
import ToxBox from "./Components/Administration/Settings/ToxBox";
import CronSettings from "./Components/Administration/Settings/CronSettings";
import Chat from "./Components/Screens/Chat";
import ChatLayout from "./Layout/ChatLayout";

function App() {
  {
    /* <React.Fragment>
      <Routers />
    </React.Fragment> */
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="employee-dashboard" element={<Employess />} />
            <Route path="events" element={<Calendar />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="file-manager" element={<FileManager />} />
            <Route path="employees" element={<AllEmployess />} />
            <Route path="holidays" element={<Holiday />} />
            <Route path="leaves" element={<Leaves />} />
            <Route path="leaves-employee" element={<LeavesEmployee />} />
            <Route path="leaves-settings" element={<LeaveSettings />} />
            <Route path="attendance" element={<Attendance />} />
            <Route
              path="attendance-employee"
              element={<AttendanceEmployee />}
            />
            <Route path="departments" element={<Departments />} />
            <Route path="designations" element={<Designation />} />
            <Route path="timesheet" element={<TimeSheet />} />
            <Route path="timesheet" element={<TimeSheet />} />
            <Route path="shift-scheduling" element={<ShiftSchedule />} />
            <Route path="overtime" element={<OverTime />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="leads" element={<Leads />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="estimates" element={<Estimates />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="payments" element={<Payment />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="provident-fund" element={<ProvidentFund />} />
            <Route path="taxes" element={<Taxes />} />
            <Route path="categories" element={<Categories />} />
            <Route path="budgets" element={<Budget />} />
            <Route path="budget-expenses" element={<BudgetExpenses />} />
            <Route path="budget-revenues" element={<BudgetRevenue />} />
            <Route path="salary" element={<EmployeeSalary />} />
            <Route path="salary-view" element={<SalaryView />} />
            <Route path="payroll-items" element={<PayrollItems />} />
            <Route path="policies" element={<Policies />} />
            <Route path="expense-reports" element={<ExpenseReports />} />
            <Route path="invoice-reports" element={<InvoiceReports />} />
            <Route path="payments-reports" element={<PaymentReports />} />
            <Route path="project-reports" element={<ProjectReports />} />
            <Route path="task-reports" element={<TaskReport />} />
            <Route path="user-reports" element={<UserReports />} />
            <Route path="employee-reports" element={<EmployeeReports />} />
            <Route path="payslip-reports" element={<PayslipReport />} />
            <Route path="attendance-reports" element={<AttendanceReport />} />
            <Route path="leave-reports" element={<LeaveReport />} />
            <Route path="daily-reports" element={<DailyReport />} />
            <Route
              path="performance-indicator"
              element={<PerformanceIndicator />}
            />
            <Route path="performance" element={<Performance />} />
            <Route
              path="performance-appraisal"
              element={<PerformanceAppraisal />}
            />
            <Route path="goal-tracking" element={<GoalList />} />
            <Route path="goal-type" element={<GoalType />} />
            <Route path="training" element={<TrainingList />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="training-type" element={<TrainingType />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="resignation" element={<Resignation />} />
            <Route path="termination" element={<Termination />} />
            <Route path="assets" element={<Assets />} />
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path="jobs-dashboard" element={<JobsDashboard />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="manage-resumes" element={<ManageResume />} />
            <Route
              path="shortlist-candidates"
              element={<ShortListCandidates />}
            />
            <Route
              path="interview-questions"
              element={<InterviewQuestions />}
            />
            <Route path="offer_approvals" element={<OfferApproval />} />
            <Route path="experiance-level" element={<ExperienceLevel />} />
            <Route path="candidates" element={<Canditates />} />
            <Route path="schedule-timing" element={<ScheduleTiming />} />
            <Route path="apptitude-result" element={<ApptitudeResult />} />
            <Route path="knowledgebase" element={<KnowledgeBase />} />
            <Route path="activities" element={<Activities />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<EmployeeProfile />} />
            <Route path="client-profile" element={<CLientProfile />} />
            <Route path="subscriptions" element={<Subscription />} />
            <Route
              path="subscriptions-company"
              element={<SubscriptionCompany />}
            />
            <Route path="subscribed-company" element={<Subscribed />} />
            <Route path="search" element={<Search />} />
            <Route path="faq" element={<Faq />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="blank-page" element={<BlankPage />} />
            <Route path="accordions" element={<Accordion />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="avatar" element={<Avatar />} />
            <Route path="badges" element={<Badges />} />
            <Route path="buttons" element={<Button />} />
            <Route path="buttongroup" element={<ButtonsGroup />} />
            <Route path="breadcrumbs" element={<BreadCrumb />} />
            <Route path="cards" element={<Card />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="dropdowns" element={<DropDowm />} />
            <Route path="grid" element={<Grid />} />
            <Route path="images" element={<Images />} />
            <Route path="lightbox" element={<LightBox />} />
            <Route path="media" element={<Media />} />
            <Route path="modal" element={<Modal />} />
            <Route path="offcanvas" element={<OffCanvas />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="popover" element={<Popover />} />
            <Route path="progress" element={<Progress />} />
            <Route path="placeholders" element={<Placeholder />} />
            <Route path="rangeslider" element={<RangeSlider />} />
            <Route path="spinners" element={<Spinners />} />
            <Route path="sweetalerts" element={<SweetAlert />} />
            <Route path="tab" element={<Tab />} />
            <Route path="toastr" element={<Toast />} />
            <Route path="tooltip" element={<Tooltip />} />
            <Route path="typography" element={<Typography />} />
            <Route path="video" element={<Video />} />
            <Route path="ribbon" element={<Ribbon />} />
            <Route path="clipboard" element={<ClipBoard />} />
            <Route path="drag-drop" element={<DragDrop />} />
            <Route path="rating" element={<Rating />} />
            <Route path="text-editor" element={<TextEditor />} />
            <Route path="counter" element={<Counter />} />
            <Route path="scrollbar" element={<ScrollBar />} />
            <Route path="notification" element={<Notification />} />
            <Route path="stickynote" element={<StickyNote />} />
            <Route path="timeline" element={<TimeLine />} />
            <Route
              path="horizontal-timeline"
              element={<HorizontalTimeLine />}
            />
            <Route path="form-wizard" element={<FormWizard />} />
            <Route path="chart-apex" element={<ApexChart />} />
            <Route path="chart-js" element={<Charts />} />
            <Route path="chart-morris" element={<MorrisChart />} />
            <Route path="chart-flot" element={<MorrisChart />} />
            <Route path="chart-peity" element={<PeityChart />} />
            <Route path="chart-c3" element={<C3Chart />} />
            <Route path="form-basic-input" element={<BasicInput />} />
            <Route path="form-input-groups" element={<FormInputGroups />} />
            <Route path="form-horizontal" element={<FormHorizontal />} />
            <Route path="form-vertical" element={<FormVertical />} />
            <Route path="form-mask" element={<FormMask />} />
            <Route path="form-validation" element={<FormValidation />} />
            <Route path="form-select2" element={<FormSelet2 />} />
            <Route path="form-fileupload" element={<FileUpload />} />
            <Route path="tables-basic" element={<BasicTable />} />
            <Route path="data-tables" element={<DataTables />} />
          </Route>

          <Route path="/" element={<SettingsLayout />}>
            <Route path="settings" element={<Settings />} />
            <Route path="localization" element={<Localization />} />
            <Route path="theme-settings" element={<ThemeSettings />} />
            <Route path="roles-permissions" element={<RolesAndPermission />} />
            <Route path="email-settings" element={<EmailSettings />} />
            <Route
              path="performance-setting"
              element={<PerformanceSettings />}
            />
            <Route path="approval-setting" element={<ApprovalSettings />} />
            <Route path="invoice-settings" element={<InvoiceSettings />} />
            <Route path="salary-settings" element={<SalarySettings />} />
            <Route
              path="notifications-settings"
              element={<NotificationSettings />}
            />
            <Route path="leave-type" element={<LeaveTypeSettings />} />
            <Route path="toxbox-setting" element={<ToxBox />} />
            <Route path="cron-setting" element={<CronSettings />} />
          </Route>

          <Route path="error-page" element={<Four0Four />} />
          <Route path="error_page" element={<Five00 />} />

          <Route path="/" element={<ChatLayout />}>
            <Route path="/chat" element={Chat} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="forgot-password" element={<ForgetPassword />} />
            <Route path="otp" element={<Otp />} />
            <Route path="lock-screen" element={<LockScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
