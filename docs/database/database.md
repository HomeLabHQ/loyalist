```dot
digraph model_graph {
  // Dotfile by Django-Extensions graph_models
  // Cli Options: -a -g -o docs/database/database.dot

  fontname = "Roboto"
  fontsize = 8
  splines  = true
  rankdir = "TB"

  node [
    fontname = "Roboto"
    fontsize = 8
    shape = "plaintext"
  ]

  edge [
    fontname = "Roboto"
    fontsize = 8
  ]

  // Labels
  subgraph cluster_django_contrib_admin {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>django.contrib.admin</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    django_contrib_admin_models_LogEntry [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      LogEntry
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>AutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><B>content_type</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><B>ForeignKey (id)</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>user</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">action_flag</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">PositiveSmallIntegerField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">action_time</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">change_message</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">TextField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">object_id</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">TextField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">object_repr</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_django_contrib_auth {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>django.contrib.auth</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    django_contrib_auth_models_Permission [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Permission
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>AutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>content_type</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">codename</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">name</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    django_contrib_auth_models_Group [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Group
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>AutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">name</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_django_contrib_contenttypes {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>django.contrib.contenttypes</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    django_contrib_contenttypes_models_ContentType [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      ContentType
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>AutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">app_label</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">model</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_django_contrib_sessions {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>django.contrib.sessions</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    django_contrib_sessions_base_session_AbstractBaseSession [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      AbstractBaseSession
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">expire_date</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">session_data</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">TextField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    django_contrib_sessions_models_Session [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Session<BR/>&lt;<FONT FACE="Roboto"><I>AbstractBaseSession</I></FONT>&gt;
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I><B>session_key</B></I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I><B>CharField</B></I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>expire_date</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>session_data</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>TextField</I></FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_authentication {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>authentication</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    django_contrib_auth_models_PermissionsMixin [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      PermissionsMixin
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">is_superuser</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    django_contrib_auth_base_user_AbstractBaseUser [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      AbstractBaseUser
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">last_login</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">password</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    authentication_models_User [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      User<BR/>&lt;<FONT FACE="Roboto"><I>AbstractBaseUser,PermissionsMixin</I></FONT>&gt;
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">email</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">EmailField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">first_name</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">is_active</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">is_staff</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">is_superuser</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>last_login</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">last_name</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>password</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>CharField</I></FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_social_django {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>social_django</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    social_django_models_AbstractUserSocialAuth [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      AbstractUserSocialAuth
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>user</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>ForeignKey (None)</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">created</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">extra_data</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">JSONField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">modified</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">provider</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">uid</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    social_django_models_UserSocialAuth [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      UserSocialAuth<BR/>&lt;<FONT FACE="Roboto"><I>AbstractUserSocialAuth</I></FONT>&gt;
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I><B>user</B></I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I><B>ForeignKey (id)</B></I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>extra_data</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>JSONField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>modified</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>provider</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>CharField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>uid</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>CharField</I></FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    social_django_models_Nonce [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Nonce
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">salt</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">server_url</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">timestamp</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">IntegerField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    social_django_models_Association [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Association
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">assoc_type</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">handle</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">issued</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">IntegerField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">lifetime</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">IntegerField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">secret</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">server_url</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    social_django_models_Code [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Code
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">code</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">email</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">EmailField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">timestamp</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">verified</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    social_django_models_Partial [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Partial
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">backend</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">data</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">JSONField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">next_step</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">PositiveSmallIntegerField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">timestamp</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">token</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }
  subgraph cluster_events {
    label=<
          <TABLE BORDER="0" CELLBORDER="0" CELLSPACING="0">
          <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER">
          <FONT FACE="Roboto" COLOR="Black" POINT-SIZE="10">
          <B>events</B>
          </FONT>
          </TD></TR>
          </TABLE>
          >
    color=olivedrab4
    style="rounded"
  
    core_models_TimeStampedModel [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      TimeStampedModel
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">created_at</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto">updated_at</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto">DateTimeField</FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    core_models_TitleDescriptionModel [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      TitleDescriptionModel<BR/>&lt;<FONT FACE="Roboto"><I>TitleModel,DescriptionModel</I></FONT>&gt;
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>description</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>TextField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>title</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>CharField</I></FONT>
      </TD></TR>
    
    
      </TABLE>
      >]
  
    events_models_Event [label=<
      <TABLE BGCOLOR="white" BORDER="1" CELLBORDER="0" CELLSPACING="0">
      <TR><TD COLSPAN="2" CELLPADDING="5" ALIGN="CENTER" BGCOLOR="#1b563f">
      <FONT FACE="Roboto" COLOR="white" POINT-SIZE="10"><B>
      Event<BR/>&lt;<FONT FACE="Roboto"><I>TitleDescriptionModel,TimeStampedModel</I></FONT>&gt;
      </B></FONT></TD></TR>
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>id</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>BigAutoField</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><B>author</B></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><B>ForeignKey (id)</B></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">color</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">CharField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>created_at</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">date</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">DateField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>description</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>TextField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto">is_public</FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto">BooleanField</FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT FACE="Roboto"><I>title</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT FACE="Roboto"><I>CharField</I></FONT>
      </TD></TR>
    
    
    
      <TR><TD ALIGN="LEFT" BORDER="0">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>updated_at</I></FONT>
      </TD><TD ALIGN="LEFT">
      <FONT COLOR="#7B7B7B" FACE="Roboto"><I>DateTimeField</I></FONT>
      </TD></TR>
    
    
      </TABLE>
      >]

  }


  // Relations

  django_contrib_admin_models_LogEntry -> authentication_models_User
  [label=" user (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_admin_models_LogEntry -> django_contrib_contenttypes_models_ContentType
  [label=" content_type (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];


  django_contrib_auth_models_Permission -> django_contrib_contenttypes_models_ContentType
  [label=" content_type (permission)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_auth_models_Group -> django_contrib_auth_models_Permission
  [label=" permissions (group)"] [arrowhead=dot arrowtail=dot, dir=both];



  django_contrib_sessions_models_Session -> django_contrib_sessions_base_session_AbstractBaseSession
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  authentication_models_User -> django_contrib_auth_models_Group
  [label=" groups (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  authentication_models_User -> django_contrib_auth_models_Permission
  [label=" user_permissions (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  authentication_models_User -> django_contrib_auth_base_user_AbstractBaseUser
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  authentication_models_User -> django_contrib_auth_models_PermissionsMixin
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  social_django_models_AbstractUserSocialAuth -> authentication_models_User
  [label=" user (social_auth)"] [arrowhead=none, arrowtail=dot, dir=both];

  social_django_models_UserSocialAuth -> authentication_models_User
  [label=" user (social_auth)"] [arrowhead=none, arrowtail=dot, dir=both];

  social_django_models_UserSocialAuth -> social_django_models_AbstractUserSocialAuth
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  core_models_TitleModel [label=<
  <TABLE BGCOLOR="white" BORDER="0" CELLBORDER="0" CELLSPACING="0">
  <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="#1b563f">
  <FONT FACE="Roboto" POINT-SIZE="12" COLOR="white">TitleModel</FONT>
  </TD></TR>
  </TABLE>
  >]
  core_models_TitleDescriptionModel -> core_models_TitleModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];
  core_models_DescriptionModel [label=<
  <TABLE BGCOLOR="white" BORDER="0" CELLBORDER="0" CELLSPACING="0">
  <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="#1b563f">
  <FONT FACE="Roboto" POINT-SIZE="12" COLOR="white">DescriptionModel</FONT>
  </TD></TR>
  </TABLE>
  >]
  core_models_TitleDescriptionModel -> core_models_DescriptionModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  events_models_Event -> authentication_models_User
  [label=" author (events)"] [arrowhead=none, arrowtail=dot, dir=both];

  events_models_Event -> core_models_TitleDescriptionModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  events_models_Event -> core_models_TimeStampedModel
  [label=" abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


}
```
