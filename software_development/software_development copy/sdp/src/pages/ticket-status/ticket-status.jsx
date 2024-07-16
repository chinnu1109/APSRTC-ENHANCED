import React from "react";
import Headerimage from "../../images/Headerimage.png";
import Navbar from "../../components/Navbar/Navbar";

//import "./jquery-ui.css";
import "./print.css";
import "./skin_4_1.css";


export default function TicketStatus() {
    return (
        <div>
            <div className="contentMain">
                <div className="subContent">
                    <div className="innerpageTitlebar">
                        <div className="left">

                            <span className="innerpageTitleHdead">
                                Track Ticket Status</span>
                            <span className="headertext"></span>
                        </div>
                        <div className="right"></div>
                    </div>

                    <div id="genPNRId">
                        <div className="headerCS" id="PnrDivId">
                            <form action="https://www.apsrtconline.in/oprs-web/tickets/status.do" method="POST" name="bookingsForm" id="bookingsForm">
                                <table width="90%" border="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="5" cellpadding="0" className="contentTbl">
                                                    <tbody>
                                                        <tr>
                                                            <td className="formlabel" width="16%">
                                                                <input type="radio" name="isTranxSuccess" value="1" id="isTranxSuccess_1" />Ticket Enquiry</td>
                                                            <td width="16%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changeObRef();" id="isTranxSuccess_2" />Transaction Status</td>
                                                            <td width="16%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changeServiceStatus();" id="isTranxSuccess_5" />Service Status</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                    <tbody>
                                                        <tr>
                                                            <td className="formlabel">
                                                                Ticket No.</td>
                                                            <td>
                                                                <input type="text" name="id" size="20" value="" onBlur="convertToUpper(this);" id="id" className="searchTktCancel" />
                                                            </td>
                                                            <td className="formlabel">
                                                                Mobile No.</td>
                                                            <td>
                                                                <input type="text" name="mobileNo" maxLength="10" size="15" value="" id="mobileNo" className="searchTktCancel" />
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td valign="middle" colSpan="6">
                                                                <div align="center">
                                                                    <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="validateMyTicket(this.form, 'bookingsForm', '/oprs-web/tickets/status.do')" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <div className="headerCS" id="ObRefDivId" style={{ display: "none" }}>
                            <form action="https://www.apsrtconline.in/oprs-web/tickets/status.do" method="POST" name="bookingsForm" id="bookingsForm">
                                <table width="90%" border="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="15" cellpadding="0" className="contentTbl">
                                                    <tbody>
                                                        <tr>
                                                            <td className="formlabel" width="21%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changepnrNo();" id="isTranxSuccess_3" />Ticket Enquiry</td>
                                                            <td width="20%">
                                                                <input type="radio" name="isTranxSuccess" value="1" id="isTranxSuccess_4" />Transaction Status</td>
                                                            <td width="20%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changeServiceStatus();" id="isTranxSuccess_6" />Service Status</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="16%">
                                                                <input type="radio" name="tranxStatus" value="1" onClick="searchTranxStatus();" id="TransactionStatus_1" />By OB Reference No</td>
                                                            <td width="16%">
                                                                <input type="radio" name="tranxStatus" value="0" onClick="searchTranxStatus();" id="TransactionStatus_2" />By Mobile Number</td>
                                                            <td width="20%">
                                                                <input type="radio" name="tranxStatus" value="0" onClick="searchTranxStatus();" id="TransactionStatus_3" />By Email Id</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                                <div className="innerHeaderCS" id="ByMobileNo" style={{ display: "none" }}>

                                    <table width="90%" border="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                        <tbody>
                                                            <tr>
                                                                <td className="formlabel">
                                                                    Mobile No.</td>
                                                                <td>
                                                                    <input type="hidden" name="id" value="" id="id" /><input type="text" name="mobileNo" maxLength="10" size="15" value="" onBlur="isNumber(this);" id="tranxMobileNo" className="searchTktCancel" />
                                                                </td>
                                                                <td className="formlabel">
                                                                    Booked Date</td>
                                                                <td>
                                                                    <input type="hidden" name="txtJourneyDate" value="17/03/2024" id="txtJourneyDate" /><input type="text" name="tranxDate" id="tranxDate" readOnly className="mod-serch-onward" onMouseOver="calendarMnYrSelect('tranxDate');" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td valign="middle" colSpan="2">
                                                                    <div align="right">
                                                                        <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="getTranxDetails(this.form, 'bookingsForm', '/oprs-web/tickets/status/tranxDetails.do')" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="innerHeaderCS" id="ByEmailId" style={{ display: "none" }}>
                                    <table width="90%" border="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                        <tbody>
                                                            <tr>
                                                                <td className="formlabel">
                                                                    Email Id</td>
                                                                <td>
                                                                    <input type="hidden" name="id" value="" id="id" /><input type="text" name="email" size="40" value="" onBlur="validEmail(this);" id="email" className="searchTktCancel" />
                                                                </td>
                                                                <td className="formlabel">
                                                                    Booked Date</td>
                                                                <td>
                                                                    <input type="hidden" name="txtJourneyDate" value="17/03/2024" id="txtJourneyDate" /><input type="text" name="tranxDate" id="tranxDate1" readOnly className="mod-serch-onward" onMouseOver="calendarMnYrSelect('tranxDate1');" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td valign="middle" colSpan="2">
                                                                    <div align="right">
                                                                        <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="getTranxDetails(this.form, 'bookingsForm', '/oprs-web/tickets/status/tranxDetails.do')" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="innerHeaderCS" id="ByObRefenceId" style={{ display: "none" }}>
                                    <table width="90%" border="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                        <tbody>
                                                            <tr>
                                                                <td className="formlabel" align="center">
                                                                    OB Reference No.</td>
                                                                <td align="left">
                                                                    <input type="hidden" name="id" value="" id="id" /><input type="text" name="bankRefNo" size="20" value="" onBlur="convertToUpper(this);" id="bankRefNo" className="searchTktCancel" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td valign="middle" colSpan="2">
                                                                    <div align="center">
                                                                        <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="getTranxDetails(this.form, 'bookingsForm', '/oprs-web/tickets/status/tranxDetails.do')" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div className="headerCS" id="ByServiceStatus" style={{ display: "none" }}>
                            <form action="https://www.apsrtconline.in/oprs-web/tickets/status.do" method="POST" name="bookingsForm" id="bookingsForm">
                                <table width="90%" border="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="15" cellpadding="0" className="contentTbl">
                                                    <tbody>
                                                        <tr>
                                                            <td className="formlabel" width="30%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changepnrNo();" id="isTranxSuccess_7" />Ticket Enquiry</td>
                                                            <td width="20%">
                                                                <input type="radio" name="isTranxSuccess" value="0" onClick="changeObRef();" id="isTranxSuccess_8" />Transaction Status</td>
                                                            <td>
                                                            </td>
                                                            <td width="30%">
                                                                <input type="radio" name="isTranxSuccess" value="1" id="isTranxSuccess_9" />Service Status</td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="16%">
                                                                <input type="radio" name="serviceStatus" value="1" onClick="searchServiceStatus();" id="serviceStatus_1" />By Ticket Number</td>
                                                            <td width="16%">
                                                                <input type="radio" name="serviceStatus" value="0" onClick="searchServiceStatus();" id="serviceStatus_2" />By Service Code</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                                <div className="innerHeaderCS" id="ByTripcodeId">
                                    <table width="90%" border="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                        <tbody>
                                                            <tr>
                                                                <td className="formlabel">
                                                                    Service Code</td>
                                                                <td>
                                                                    <input type="text" name="serviceCode" maxLength="20" size="15" value="" onBlur="convertToUpper(this);" id="serviceCode" className="searchTktCancel" />
                                                                </td>
                                                                <td className="formlabel">
                                                                    Departure Date</td>
                                                                <td>
                                                                    <input type="text" name="txtDepartureDate" id="txtDepartureDate" readOnly className="mod-serch-onward" onMouseOver="calendarMnYrSelect('txtDepartureDate');" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td valign="middle" colSpan="2">
                                                                    <div align="right">
                                                                        <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="getServiceDetails(this.form, 'bookingsForm', '/oprs-web/tickets/status/serviceDetails.do')" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="innerHeaderCS" id="ByPnrNoId">
                                    <table width="90%" border="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" className="contentTbl">

                                                        <tbody>
                                                            <tr>
                                                                <td className="formlabel">
                                                                    Ticket No.</td>
                                                                <td>
                                                                    <input type="text" name="pnrPrefixWithTktNo" size="20" value="" onBlur="convertToUpper(this);" id="pnrPrefixWithTktNo1" className="searchTktCancel" />
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <td valign="middle" colSpan="2">
                                                                    <div align="center">
                                                                        <input type="button" name="searchBtn" id="searchBtn" className="submitBtn" value="Submit" onClick="getServiceDetails(this.form, 'bookingsForm', '/oprs-web/tickets/status/serviceDetails.do')" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
